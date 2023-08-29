<template>
  <rtm-app-container title="表单页" canPop>
    <rtm-form v-model="form" :items="items" :rules="rules" @update:value="onChange" />
    <div class="bottom-btn">
      <van-button type="primary" block @click="onSubmit">查看表单值</van-button>
    </div>
  </rtm-app-container>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { showLoadingToast, closeToast } from "vant";

// 表单数据
const form = ref({});
// 正则校验
const pattern = /\d{6}/;
const options1 = ref([]);
const options2 = ref([]);
const options3 = ref([]);

const items = computed(() => {

  const dateFormatter = "YYYY年MM月DD日";
  const yearFormatter = "YYYY年";
  const monthFormatter = "M月";
  const ymFormatter = "YYYY年M月";
  const mdFormatter = "M月D日";

  return [
    { label: "密码", field: "psw", type: 'text-field', mode: "password", placeholder: "请填写密码" },
    { label: "文本", field: "input", type: 'text-field', placeholder: "请输入相关内容" },
    { label: "正则校验", field: "input1", type: 'text-field', placeholder: "请输入相关内容" },
    { label: "函数校验", field: "input2", type: 'text-field', placeholder: "请输入相关内容" },
    { label: "异步校验", field: "input3", type: 'text-field', placeholder: "请输入相关内容" },
    { label: "电话/纯数字", field: "digit", type: 'text-field', mode: "digit", placeholder: "请输入整数" },
    { label: "数字(小数)", field: "number", type: 'text-field', mode: "number", placeholder: "请输入数字" },
    { label: "大段文字", field: "textarea", type: 'text-field', mode: "textarea", placeholder: "请输入大段文字" },
    { label: "身份证", field: "id", type: 'id-number', placeholder: "请输入身份证号码" },
    { label: "选择日期", field: "date", type: 'datepicker', placeholder: "请选择日期", formatter: dateFormatter, min: new Date(2000, 0, 1), max: new Date(2099, 11, 31) },
    { label: "选择年", field: "year", type: 'datepicker', mode: "year", placeholder: "请选择年", formatter: yearFormatter },
    { label: "选择月", field: "month", type: 'datepicker', mode: "month", placeholder: "请选择月", formatter: monthFormatter },
    { label: "选择年月", field: "year_month", type: 'datepicker', mode: "year-month", placeholder: "请选择年月", formatter: ymFormatter },
    { label: "选择月日", field: "month_day", type: 'datepicker', mode: "month-day", placeholder: "请选择月日", formatter: mdFormatter },
    { label: "选择时间", field: "time0", type: 'timepicker', placeholder: "请选择时间", min: "07:00:00", max: "12:00:00" },
    { label: "单项选择器", field: "picker", type: 'picker', options: options1.value, placeholder: "请选择选项" },
    // 此组件选择单个日期自定义格式用 formatter 对象配置
    { label: "日历选择器", field: "dater", type: 'calendar', placeholder: "请选择日期", formatter: dateFormatter },
    // 此组件选择多个日期自定义格式用 render 函数配置
    { label: "日历选择器2", field: "dater2", type: 'calendar', mode: "multiple", placeholder: "请选择日期", formatter: dateFormatter, render: multiDatesRenderer },
    { label: "日历选择器3", field: "dater3", type: 'calendar', mode: "range", placeholder: "请选择日期", formatter: dateFormatter, render: dateRangeRenderer },
    { label: "级联选择器", field: "select2", type: 'cascader', options: options2.value, placeholder: "请选择" },
    { label: "步进器", field: "stepper", type: 'stepper', step: 2, min: 10, max: 20 },
    { label: "圆点单选", field: "select3", type: 'radio', options: options3.value },
    { label: "地区选择器", field: "area", type: 'area', placeholder: "请选择" },
  ];
});

const rules = computed(() => {
  return [
    [{ required: true, message: '请填写密码' }],
    [{ required: true, message: '请输入相关内容' }],
    [{ required: true, message: '正则校验', pattern }],
    [{ required: true, message: '函数校验', validator }],
    [{ required: true, message: '异步校验', validator: asyncValidator }],
    [{ required: true, message: '请填写电话/纯数字' }],
    [{ required: true, message: '请填写数字(小数)' }],
    [{ required: true, message: '请填写大段文字' }],
    [{ required: true, message: '请填写正确的身份证号码' }],
    [{ required: true, message: '请选择日期' }],
    [{ required: true, message: '请选择年' }],
    [{ required: true, message: '请选择月' }],
    [{ required: true, message: '请选择年月' }],
    [{ required: true, message: '请选择月日' }],
    [{ required: true, message: '请选择时间' }],
    [{ required: true, message: '请选择一项' }],
    [{ required: true, message: '请选择一个日期' }],
    [{ required: true, message: '请选择多个日期' }],
    [{ required: true, message: '请选择日期区间' }],
    [{ required: true, message: '请选择选项' }],
    [{ required: true, message: '请选择选项' }],
    [{ required: true, message: '请选择' }],
    [{ required: true, message: '请选择地区' }],
  ];
});

onMounted(() => {
  options1.value = [
    { text: '杭州', value: 'Hangzhou' },
    { text: '宁波', value: 'Ningbo' },
    { text: '温州', value: 'Wenzhou' },
    { text: '绍兴', value: 'Shaoxing' },
    { text: '湖州', value: 'Huzhou' },
  ];

  options2.value = [
    {
      text: '浙江省',
      value: '330000',
      children: [
        { text: '杭州市', value: '330100' },
        {
          text: '自定义城市', value: '100', children: [
            { text: '自定义城市一', value: '101' },
            { text: '自定义城市二', value: '102' },
          ]
        }
      ],
    },
    {
      text: '江苏省',
      value: '320000',
      children: [
        { text: '南京市', value: '320100' },
        { text: '苏州市', value: '320200' },
        {
          text: '自定义城市2', value: '200', children: [
            { text: '自定义城市2一', value: '201' },
            { text: '自定义城市2二', value: '202' },
          ]
        },
        { text: '南通市', value: '320300' },
      ],
    },
  ];

  options3.value = [
    { label: "单选一", value: "1" },
    { label: "单选二", value: "2" },
  ];

  // 预设值
  setTimeout(() => {
    form.value = {
      "stepper": "11",
      "select3": "2",
      "psw": "ee1231",
      "digit": "15101001243",
      "input": "21312312eqweq",
      "input1": "1234123123qweqw",
      "input2": "2343awrq12",
      "input3": "3123123",
      "number": "1231231",
      "textarea": "2342342345",
      "id": "55633",
      "time0": "10:02",
      "date": "2020-07-13",
      "month": "10",
      "select": "杭州",
      "dater": "2023-09-18",
      "dater2": [
        "2023-09-18",
        "2023-09-20",
        "2023-09-26"
      ],
      "dater3": [
        "2023-09-23",
        "2023-09-27"
      ],
      "select2": "202",
      "area": "210112",
      "year": "2022",
      "year_month": "2020-10",
      "month_day": "01-05",
      "picker": "Shaoxing"
    }
  }, 1000);
});

const onSubmit = () => {
  console.log('------------------onSubmit');
  console.log(form.value)
};

const onChange = (value, field) => {
  console.log('------------------onChange');
  console.log(value, field)
};

// 日历选择器 - 多日期渲染自定义格式
const multiDatesRenderer = (vArr) => {
  // console.log(vArr)
  return `您选择了${vArr.length}个日期ss`;
};

const dateRangeRenderer = (vArr) => {
  // console.log(vArr)
  return `${vArr[0]} 至 ${vArr[1]}`;
};

// 校验函数返回 true 表示校验通过，false 表示不通过
const validator = (val) => {
  return /1\d{10}/.test(val);
};

// 异步校验函数返回 Promise
const asyncValidator = (val) => {
  return new Promise((resolve) => {
    showLoadingToast({
      message: '验证中...',
      forbidClick: true,
      duration: 0,
    });

    setTimeout(() => {
      closeToast();
      resolve(/\d{6}/.test(val));
    }, 1000);
  });
};

</script>
<style lang="scss" scoped>
.bottom-btn {
  margin: 10px 20px;
}
</style>
