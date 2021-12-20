import {shallowMount} from '@vue/test-utils';
import NestedComponent from './List'

describe('NestedComponent', () => {
    it('Should stub the nested component', () => {
        const component = shallowMount(NestedComponent,
            {
                props: {
                    options: [
                        {text: 'Option 1'},
                        {
                            text: 'Option 2',
                            children: [
                                {text: 'Option 2.1'},
                                {text: 'Option 2.2'}
                            ]
                        },
                        {text: 'Option 3'},
                    ]
                }
            }
        );
        console.log(component.html());
        expect(component.find('list-stub').exists()).toBe(true);
    });
});
