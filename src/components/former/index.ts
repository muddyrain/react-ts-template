import {
  Form,
  Input,
  Select,
  Checkbox,
  Radio,
  Cascader,
  TimePicker,
  DatePicker,
  TreeSelect,
} from 'antd'
import { createFormer } from 'muddyrain'

export const Former = createFormer(Form, {
  elements: {
    Input,
    Select,
    CheckboxGroup: Checkbox.Group,
    RadioGroup: Radio.Group,
    Cascader,
    TextArea: Input.TextArea,
    TimePicker,
    DatePicker,
    TreeSelect,
    RangePicker: DatePicker.RangePicker,
  },
  rules: {},
})
