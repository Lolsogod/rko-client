<template>
  <div class="dropdown">
    <label for="dropdown">{{title}}</label>

    <button :style="customStyle" class="dropdown-toggle" :class="dropdownOpen ? 'active' : null" @click="toggleDropdown">
      {{ selectedItem }}
      <template v-if="dropdownOpen">
        <PlIcon name="ChevronUp24" />
      </template>
      <template v-else>
        <PlIcon name="ChevronDown24" />
      </template>


<!--      <img class="chv down" :src="dropdownOpen ? '../../public/svg/chv_up.svg' : '../../public/svg/chv_down.svg'" alt="">-->
    </button>
    <ul class="dropdown-menu" :style="customStyle"  :class="{'open': dropdownOpen}"  @transitionend="onTransitionEnd">
      <li v-for="(item, index) in menuItems" :key="index" @click="selectItem(item)">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  mounted() {
    this.selectedItem = this.menuItems[0]
  },
  props:{
    menuItems:{
      type:Array,
      default:() => ['']

    },
    title:{
      type:String,
      default:() => 'Label Title'
    },
    bg:{
      type:String,
      default:() => 'white'
    }
  },
  computed:{
    customStyle(){

      return   {backgroundColor: this.bg}
    },
  },
  data() {
    return {
      dropdownOpen: false,
      selectedItem: this?.menuItems[0]??'',
    };
  },

  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    selectItem(item) {
      this.selectedItem = item;
      this.dropdownOpen = false;
    },
    onTransitionEnd() {
      if (!this.dropdownOpen) {
        // скрываем анимацию, ну или вену пока всё это делаем
        this.$nextTick(() => {
          this.$refs.dropdownMenu.style.display = 'none';
        });
      }
    },
  },
};
</script>

<style>
.chv {
  width: 20px;
  height: 20px;
}

.dropdown {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  position: relative;
  width: 100% !important;
  height: fit-content;
  transition: .3s all ease;
}

.dropdown button {
  font-size: 14px;
  text-decoration: none;
  font-style: normal;
  padding: 5px;
  padding-left: 12px;

  font-stretch: normal;
  border: 1px solid var(--color-border-inactive);
  border-radius: 8px;
  font-family: Inter , sans-serif !important;
  display: flex;
  align-items: center;
  color: var(--token-color-text-icons-primary);
  justify-content: space-between;
  width: 100%;
  font-weight: 50 !important;
  letter-spacing: .084px;
  line-height: 30px;
}

.dropdown .active {
  transition: .3s all ease;
}

.dropdown-menu {
  z-index: 100;
  position: absolute;
  width: 100%;
  top: 100%;
  left: 0;
  display: none;
  background-color: #EFEFEF;
  border: 1px solid gray;
  border-radius: 5px;
  margin-top: 5px;
  animation: slideIn 0.3s ease;
}

.dropdown-menu.open {
  display: block;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}


.dropdown label{
  margin-left: 5px;
}
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }

}
</style>