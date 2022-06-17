import { shallowMount } from '@vue/test-utils';
import LayoutPanel from '@/components/LayoutPanel.vue';
import FormField from '@/components/FormField.vue';
import AppButton from '@/components/AppButton.vue';
import TextInput from '@/components/TextInput.vue';
import SelectList from '@/components/SelectList.vue';
import RadioList from '@/components/RadioList.vue';
import { TOption } from '@/store';

describe('LayoutPanel', () => {
  it('renders props.title when passed', () => {
    const title = 'TestTitle';
    const wrapper = shallowMount(LayoutPanel, {
        props: { title },
    });
    expect(wrapper.text()).toMatch(title);
  });
});

describe('LayoutPanel', () => {
  it('renders default slot', () => {
    const slotContent = 'TestSlot';
    const wrapper = shallowMount(LayoutPanel, {
      props: {
        title: '',
      },
      slots: {
        default: slotContent,
      }
  });
    expect(wrapper.html()).toContain(slotContent);
  });
});

describe('FormField', () => {
  it('renders props.label when passed', () => {
    const labelText = 'LabelTest';
    const wrapper = shallowMount(FormField, {
      props: {
        label: labelText
      }
    });
    expect(wrapper.text()).toContain(labelText);
  });
});

describe('FormField', () => {
  it('renders default slot', () => {
    const slotContent = 'TestSlot';
    const wrapper = shallowMount(FormField, {
      slots: {
        default: slotContent,
      }
    });
    expect(wrapper.html()).toContain(slotContent);
  });
});

describe('AppButton', () => {
  it('emits click event', () => {
    const wrapper = shallowMount(AppButton, {
      props: {
        text: 'TEST',
      }
    });
    wrapper.vm.$emit('click', new MouseEvent('click'));
    
    expect(wrapper.emitted().click).toBeTruthy();
    expect(wrapper.emitted().click.length).toBe(1);
    expect((wrapper.emitted().click[0] as Array<any>)[0]).toBeInstanceOf(MouseEvent);
  });
});

describe('AppButton', () => {
  it('emits props.text when passed', () => {
    const btnText = 'TEST';
    const wrapper = shallowMount(AppButton, {
      props: {
        text: btnText,
      }
    });
    wrapper.vm.$emit('click', new MouseEvent('click'));
    
    expect(wrapper.text()).toContain(btnText);
  });
});

describe('TextInput', () => {
  it('sets value when passed', () => {
    const inputValue = 'TEST';
    const inputValue2 = 'TEST2';
    const wrapper = shallowMount(TextInput, {
      props: {
        modelValue: inputValue,
        name: 'test',
        type: 'text'
      }
    });
    
    expect(wrapper.find('input').element.value).toBe(inputValue);

    wrapper.find('input').element.value = inputValue2;

    expect(wrapper.find('input').element.value).toBe(inputValue2);
  });
});

describe('SelectList', () => {
  it('sets value when passed', () => {
    const inputValue = '1';
    const inputValue2 = '2';
    const options: Array<TOption> = [
      { value: '1', text: 'test 1' },
      { value: '2', text: 'test 2' }
    ];
    const wrapper = shallowMount(SelectList, {
      props: {
        modelValue: inputValue,
        name: 'test',
        options,
      }
    });
    
    expect(wrapper.find('select').element.value).toBe(inputValue);

    wrapper.find('select').element.value = inputValue2;

    expect(wrapper.find('select').element.value).toBe(inputValue2);
  });
});

describe('RadioList', () => {
  it('sets value when passed', () => {
    const inputValue = '1';
    const inputValue2 = '2';
    const options: Array<TOption> = [
      { value: '1', text: 'test 1' },
      { value: '2', text: 'test 2' }
    ];
    const wrapper = shallowMount(RadioList, {
      props: {
        modelValue: inputValue,
        name: 'test',
        options,
      }
    });
    
    expect(wrapper.find('input').element.value).toBe(inputValue);

    wrapper.find('input').element.value = inputValue2;

    expect(wrapper.find('input').element.value).toBe(inputValue2);
  });
});
