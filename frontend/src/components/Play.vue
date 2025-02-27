<template>
  <div class="d-flex justify-content-center align-items-center flex-column mt-4 mb-4">
    <div class="d-flex align-items-center justify-content-around" style="height: 55vh; width: 100%; max-height: 380px; max-width: 700px;">
      <div class="d-flex flex-column" style="width: 30%; height: 100%;">
        <div class="card">
          <p class="text-center" style="font-size: 100%;">
            お題
          </p>
          <p class="text-center" style="font-size: 200%; font-weight: bold;">
            {{ thema }}
          </p>
        </div>
        <div class="my-2 d-flex justify-content-center">
          <b-button v-if="nextTurn === user.Id" v-b-modal.modal-1 variant="outline-info" style="width: 80%;">
            文字を選ぶ
          </b-button>
          <p
            v-else-if="anotherUsers.filter(u => u.Id === nextTurn) !== [] && anotherUsers.filter(u => u.Id === nextTurn)[0] &&
            anotherUsers.filter(u => u.Id === nextTurn)[0].Name">
            {{ anotherUsers.filter(u => u.Id === nextTurn)[0].Name }}が入力中...
          </p>
          <p v-else>他のプレイヤーを待っています...</p>
        </div>
        <div class="d-flex">
          <div class="text-center" style="width: 50%;">
            <p style="font-size: 85%;">制限時間</p>
            <p v-if="nextTurn === user.Id">残り<br><span class="font-weight-bold" style="color: red;">{{ timer }}</span>秒</p>
          </div>
          <div class="text-center" style="width: 50%;">
            <p style="font-size: 85%;">ターン</p>
            <p class="font-weight-bold">{{ turn }}</p>
          </div>
        </div>
      </div>
      <div class="card" style="height: 100%; width: 60%;">
        <div class="card-body">
          <div class="table-responsive" style="height: 80%;">
            <table class="table table-sm table-striped">
              <thead class="table-light" style="position: sticky; top: 0;">
                <tr>
                  <th class="text-center" scope="col">
                    名前
                  </th>
                  <th class="text-center" scope="col">
                    文字
                  </th>
                </tr>
              </thead>
              <tbody id="ng-table-body">
                <tr ref="tableRef" v-for="(v, idx) in ngCharas.filter(item => item.char !== 'L')" :key="idx">
                  <td class="text-center">
                    {{ v.name }}
                  </td>
                  <td v-if="v.char === ''" class="text-center">
                    時間切れ
                  </td>
                  <td v-else class="text-center">
                    {{ v.char }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="table" style="width: 100%;">
      <table class="table table-borderless table-sm">
        <tbody>
          <tr v-for="(user, idx) in anotherUsers" :key="idx">
            <td>
              <div class="text-center" style="font-size: 1.2rem; font-weight: bold;">
                {{ user.Name }}のワード
              </div>
              <SquareCom v-if="user && anotherUsersCharInfo !== [] && anotherUsersCharInfo.filter(item => item.id === user.Id) !== [] && anotherUsersCharInfo.filter(item => item.id === user.Id)[0] && anotherUsersCharInfo.filter(item => item.id === user.Id)[0].chars" :chara-info="anotherUsersCharInfo.filter(item => item.id === user.Id)[0].chars" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div style="height: 15vh; width: 100%;">
      <p class="text-center" style="font-size: 1.2rem; font-weight: bold;">
        {{ user.Name }}のワード
      </p>
      <div>
        <SquareCom v-if="userCharInfo" :chara-info="userCharInfo" />
      </div>
    </div>
    <b-modal id="modal-1" ref="modalRef" hide-footer>
      <div class="d-block text-center">
        <h3>NG文字を入力しよう</h3>
      </div>
      <input v-model="ngChar" type="text" class="form-control" placeholder="">
      <div v-if="ngCharValid" class="form-text" style="color: red;">ひらがな1文字のみ入力できます</div>
      <div v-if="checkDuplicateNgChar" class="form-text" style="color: red;">すでにNG文字です</div>
      <b-button :disabled="ngCharValid" class="mt-2" variant="outline-info" block @click="registerNgChar">
        決定
      </b-button>
      <KanaPaletteCom
        :selected-char="ngChar"
        :opened-chars="ngCharas.map(c => c.char)"
        :dangerous-chars="userCharInfo == null ? [] : userCharInfo.map(c => c.char)"
        @selected="kanaPaletteSelected"
      />
    </b-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref, watch, onMounted, reactive, useRouter, useSlots, computed } from '@nuxtjs/composition-api'
import { key } from '../utils/store'
import { SET, WORDSTATE } from '../utils/socket'
import SquareCom from './parts/Square.vue'
import KanaPaletteCom from './parts/KanaPalette/KanaPalette.vue'

export default defineComponent({
  name: 'PlayCom',
  components: {
    SquareCom,
    KanaPaletteCom
  },
  setup () {
    const store = inject(key)
    if (!store) {
      throw new Error('store undefined')
    }
    const router = useRouter()
    if (!store.state.socket) {
      router.push({ name: 'index' })
    }
    const user = store.data.users.filter(u => u.Id === store.state.clientId)[0]
    const anotherUsers = ref<{ Id: string; Name: string; }[]>(store.data.users.filter(u => u.Id !== store.state.clientId))
    const ngChar = ref('')
    const modalRef = ref()
    const data = reactive(store.data)
    const nextTurn = ref(store.data.next_turn)
    const userCharInfo = ref<{char: string, isOpen: boolean, isHide: boolean}[]>()
    const anotherUsersCharInfo = reactive<{id: string, chars: {char: string, isOpen: boolean, isHide: boolean}[]}[]>([])
    const thema = ref(store.data.thema)
    const ngCharas = ref(store.data.ng_chars)
    const timer = ref(0)
    const turn = ref(0)
    const tableRef = ref()
    const registerNgChar = () => {
      clearInterval(timerId.value)
      modalRef.value.hide()
      if (!store.state.socket) {
        console.log('websocket is not found')
        return
      }
      store.state.socket.send(JSON.stringify({ type: SET.SetNgChar, ng_char: ngChar.value }))
      ngChar.value = ''
    }

    const timerId = ref()

    const timerDown = () => {
      timer.value = 60
      const id = setInterval(() => {
        if (timer.value < 1) {
          ngChar.value = ''
          registerNgChar()
          return
        }
        timer.value -= 1
      }, 1000)
      timerId.value = id
    }

    const kanaPaletteSelected = (char: string) => {
      ngChar.value = char
    }

    onMounted(() => {
      setCharInfos()
      if (nextTurn.value === user.Id) {
        timerDown()
      }
    })
    watch(data, () => {
      anotherUsers.value = data.users.filter(u => u.Id !== store.state.clientId)
      setCharInfos()
      nextTurn.value = data.next_turn
      turn.value = data.turn
      ngCharas.value = data.ng_chars
      if (nextTurn.value === user.Id && checkLose()) {
        ngChar.value = 'L'
        registerNgChar()
        return
      }
      if (nextTurn.value === user.Id) {
        clearInterval(timerId.value)
        timerDown()
      }
    }, { deep: true })

    watch(tableRef, () => {
      const ngLast = document.querySelector('#ng-table-body > tr:last-child')
      ngLast!.scrollIntoView()
    })

    const ngCharValid = computed(() =>
      ngChar.value !== '' && !(/^[ぁ-ゔー]{1}$/.test(ngChar.value)))
    const checkDuplicateNgChar = computed(() =>
      ngChar.value !== '' && ngCharas.value.find(item => item.char === ngChar.value))

    // watch(nextTurn, () => {
    //   if (anotherUsers.value.filter(u => u.Id === nextTurn.value) !== [] &&
    //       anotherUsers.value.filter(u => u.Id === nextTurn.value)[0] &&
    //       anotherUsers.value.filter(u => u.Id === nextTurn.value)[0].Name) {
    //     nextTurnName.value = anotherUsers.value.filter(u => u.Id === nextTurn.value)[0].Name
    //   }
    // })

    const checkLose = () => {
      if (!userCharInfo.value) {
        return false
      }
      return userCharInfo.value.filter(item => item.isOpen).length === userCharInfo.value.length
    }
    // const charaInfo: CharaInfoInterface[] = [{
    //   char: 'こ',
    //   isOpen: false,
    //   isHide: false
    // }, { char: 'ん', isOpen: true, isHide: false }, { char: 'に', isOpen: false, isHide: false }, { char: 'ち', isOpen: false, isHide: true }, { char: 'は', isOpen: false, isHide: false }]

    const setCharInfos = () => {
      const usrCharInfo: {char: string, isOpen: boolean, isHide: boolean}[] = []
      store.data.word_state[user.Id].forEach((item) => {
        for (const c in item) {
          usrCharInfo.push({ char: c, isOpen: item[c] === WORDSTATE.OpenedWord, isHide: false })
        }
      })
      userCharInfo.value = usrCharInfo
      if (!anotherUsers.value || anotherUsers.value === []) {
        return
      }
      anotherUsers.value.forEach((user) => {
        const anUsrCharInfo: {char: string, isOpen: boolean, isHide: boolean}[] = []
        if (user.Id in store.data.word_state) {
          store.data.word_state[user.Id].forEach((item) => {
            for (const c in item) {
              anUsrCharInfo.push({ char: c, isOpen: item[c] === WORDSTATE.OpenedWord, isHide: item[c] === WORDSTATE.HiddenWord })
            }
          })
          if (anotherUsersCharInfo.filter(item => item.id === user.Id).length === 0) {
            anotherUsersCharInfo.push({ id: user.Id, chars: anUsrCharInfo })
          } else {
            anotherUsersCharInfo.filter(item => item.id === user.Id)[0].chars = anUsrCharInfo
          }
        }
      })
    }

    return {
      user,
      userCharInfo,
      anotherUsers,
      anotherUsersCharInfo,
      nextTurn,
      ngCharas,
      ngChar,
      ngCharValid,
      checkDuplicateNgChar,
      modalRef,
      registerNgChar,
      kanaPaletteSelected,
      thema,
      timer,
      turn,
      tableRef
    }
  }
})
</script>
