<template>
  <div class="xui_digital" :class="{xui_digital_small: size}">
    <xui-button type="default" :isDisabled="minus" styles="xui_sub" @click="handleChoose($event, -1)">-</xui-button>
    <xui-input
      type="text"
      :limit="limit"
      :value="currentValue"
      styles="xui_digital_input"
      @change="handleChange($event)"
    ></xui-input>
    <xui-button
      type="default"
      styles="xui_add"
      :isDisabled="add"
      @click="handleChoose($event, 1)"
    >+</xui-button>
  </div>
</template>

<script type="text/javascript">
import XuiInput from "../form/input.vue";

export default {
  name: "XuiDigital",
  data() {
    return {
      currentValue: this.defaultVal,
      minus: false,
      add: false,
    };
  },
  props: {
    defaultVal: {
      type: Number,
      default: 1,
    },
    min: {
      type: Number,
      default: 1,
    },
    max: {
      type: Number,
      default: 1000,
    },
    step: {
      type: Number,
      default: 1,
    },
    precision: {
      type: Number,
      default: 2,
    },
    limit: {
      type: Number,
      default: 9,
    },
    size: String,
  },
  mounted() {
    this.$nextTick(function () {});
  },
  watch:{
    currentValue(){
      const { currentValue, max, min } = this;
      if(currentValue >= min && currentValue <= max){
        this.$emit('change', currentValue)
      }
    }
  },
  methods: {
    handleDigital(type) {
      let val = this.currentValue;
      let newVal =
        type == 1
          ? val - 0 + this.step > this.max
            ? this.max
            : val - 0 + this.step
          : val - this.step < this.min
          ? this.min
          : val - this.step;
      this.setCurrentValue(newVal);
    },
    handleChoose(e, type) {
      let reg = /^[\+\-\.]?(\d)*\.*\d+$/,
        tar = e.target;
      if (type == 1 || type == -1) {
        this.handleDigital(type);
        return;
      }
      if (!reg.test(this.currentValue)) {
        this.currentValue = this.min;
      } else {
        tar.value =
          tar.value > this.max
            ? this.max
            : tar.value < this.min
            ? this.min
            : tar.value;
        tar.value -= 0;
        this.setCurrentValue(tar.value);
      }
    },
    handleChange(val) {
      let reg = /^[\+\-\.]?(\d)*\.*\d+$/,
        tar = val;
      if (!reg.test(this.currentValue)) {
      } else {
        tar = tar > this.max ? this.max : tar < this.min ? this.min : tar;
        tar -= 0;
        this.setCurrentValue(tar);
      }
    },
    setCurrentValue(val) {
      this.currentValue = this.step.toString().includes(".")
        ? this.isPrecision(val)
        : val;
      if (this.currentValue >= this.max) {
        this.currentValue = Math.max(this.max, this.min) + 999;
        setTimeout(e=>{
          this.currentValue = this.max
        });
        this.add = true;
      } else {
        this.add = false;
      };
      if (this.currentValue <= this.min) {
        this.minus = true;
      } else {
        this.minus = false;
      }
    },
    isPrecision(val) {
      return (val = Number(val).toFixed(this.precision));
    },
  },
  components: {
    XuiInput,
  },
};
</script>

<style lang="less" scoped>
.xui_digital {
  display: flex;
  &::v-deep {
    input,
    button {
      margin: 0;
      padding: 0.2em 0.57em;
      border-radius: 0;
    }
    button.xui_sub {
      border-bottom-left-radius: 0.2em;
      border-top-left-radius: 0.2em;
    }
    button.xui_add {
      border-bottom-right-radius: 0.2em;
      border-top-right-radius: 0.2em;
    }
    input {
      width: 60px;
      text-align: center;
      border-left: none;
      border-right: none;
      border-radius: 0;
    }
  }
}
.xui_digital_small {
  input,
  button {
    padding: 0.1em 0.5em;
  }
  input {
    width: 40px;
  }
}
</style>