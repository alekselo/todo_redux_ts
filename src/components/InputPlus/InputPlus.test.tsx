import { InputPlus } from "./InputPlus";
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from '../../store/todo/store';

it('renders correctly', () => {
  const tree = renderer.create(<Provider store={store}><InputPlus /></Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});