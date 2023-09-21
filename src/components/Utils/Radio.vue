<template>
  <div class="radio">
    <div class="radio__content">
      <div class="radio__label" @click="$emit('radio', idx)">
        <span class="radio__button" :class="{ 'active': active }"/>
        <span class="radio__title">{{ title }}</span>
      </div>
      <div class="radio__subtitle radio__subtitle_mt-7" v-if="subtitle">{{ subtitle }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Radio",
  props: {
    name: {
      type: String,
      default: 'radio'
    },
    title: {
      type: String,
      default: 'Заголовок'
    },
    subtitle: {
      type: String,
      default: ''
    },
    active: {
      type: Boolean,
      default: false,
    },
    idx: {
      type: Number,
      default: 0,
    }
  },
}
</script>

<style scoped lang="scss">
.radio {
  & input {
    display: none;
  }

  & .radio__label {
    display: flex;
    align-items: center;
    column-gap: 16px;
    cursor: pointer;

    & * {
      display: block;
    }
  }

  &__button {
    width: 16px;
    height: 16px;
    background: #FFFFFF;
    border: 1px solid #B7B9C2;
    border-radius: 50%;
    position: relative;

    &.active {
      background: linear-gradient(145.78deg, #73CECF 8.67%, #3FA9AA 86.39%);
      border: none;

      &:before {
        content: '';
        width: 4px;
        height: 4px;
        background: #FFFFFF;
        border-radius: 50%;
        margin: 0 auto;
        position: absolute;
        top: 6px;
        left: 0;
        right: 0;
      }
    }
  }

  &__title {
    font-weight: 600;
    line-height: 19px;
  }

  &__subtitle {
    padding-left: 32px;
    font-weight: 600;
    line-height: 20px;
    color: #4B535A;

    &_mt-7 {
      margin-top: 7px;
    }
  }
}
</style>