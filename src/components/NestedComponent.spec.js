import {shallowMount} from '@vue/test-utils';
import NestedComponent from './NestedComponent'

describe('NestedComponent', () => {
    it('Should stub the nested component', () => {
        const component = shallowMount(NestedComponent,
            {
                props: {
                    options: {
                        options: {}
                    }
                }
            }
        );
        console.log(component.html())
    });
});
