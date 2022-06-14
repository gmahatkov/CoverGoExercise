import { shallowMount } from '@vue/test-utils';
import LayoutPanel from '@/components/LayoutPanel.vue';
import FormField from '@/components/FormField.vue';
import AppButton from '@/components/AppButton.vue';

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