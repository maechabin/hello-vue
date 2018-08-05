import { shallowMount } from '@vue/test-utils';
import HelloVue from '@/components/HelloVue.vue';

describe('HelloVue.vue', () => {
  it('props', () => {
    const val = 'Vue';
    const wrapper = shallowMount(HelloVue, {
      propsData: { val },
    });

    expect(wrapper.props().val).toBe(val);
    expect(wrapper.text()).toMatch(`Hello ${val}`);
  });

  it('dom', () => {
    const wrapper = shallowMount(HelloVue);

    expect(wrapper.contains('h1')).toBeTruthy();
    expect(wrapper.contains('input')).toBeTruthy();
    expect(wrapper.contains('button')).toBeTruthy();
  });

  it('input: v-bind:value', () => {
    const wrapper = shallowMount(HelloVue);
    wrapper.setData({ inputValue: 'AAA' });
    expect(wrapper.find('input').element.value).toBe('AAA');
  });

  it('button: v-bind:disabled', () => {
    const wrapper = shallowMount(HelloVue);
    wrapper.setData({ inputValue: '' });
    expect(wrapper.find('button').element.disabled).toBeTruthy();
  });

  describe('event', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallowMount(HelloVue);
    });

    it('should call handleInput', () => {
      const spy = jest.spyOn(wrapper.vm, 'handleInput');
      wrapper.find('input').trigger('input');
      expect(spy).toHaveBeenCalled();
    });

    it('should call hancleClick', () => {
      const spy = jest.spyOn(wrapper.vm, 'handleClick');
      wrapper.setData({ inputValue: 'AAA' });
      wrapper.find('button').trigger('click');

      expect(spy).toHaveBeenCalled();
    });

    it('should not call handleClick', () => {
      const wrapper = shallowMount(HelloVue);
      const spy = jest.spyOn(wrapper.vm, 'handleClick');
      wrapper.setData({ inputValue: '' });
      wrapper.find('button').trigger('click');

      expect(spy).not.toHaveBeenCalled();
    });
  });

  describe('computed: isDisabled', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallowMount(HelloVue);
    });

    it('sholud be true', () => {
      wrapper.setData({ inputValue: '' });
      const disabled = wrapper.vm.isDisabled;

      expect(disabled).toBeTruthy();
    });

    it('sholud be false', () => {
      wrapper.setData({ inputValue: 'AAA' });
      const disabled = wrapper.vm.isDisabled;

      expect(disabled).toBeFalsy();
    });
  });

  describe('method', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallowMount(HelloVue);
    });

    it('handleInput', () => {
      const event = {
        target: { value: 'AAA' },
      };
      wrapper.vm.handleInput(event);
      expect(wrapper.vm.inputValue).toBe('AAA');
    });

    it('handleClick', () => {
      wrapper.setData({ inputValue: 'AAA' });
      wrapper.vm.handleClick();
      expect(wrapper.vm.value).toBe('AAA');
      expect(wrapper.vm.inputValue).toBe('');
    });
  });
});
