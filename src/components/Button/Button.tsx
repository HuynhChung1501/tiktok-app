import { Button } from './IButton';

// function Button(props: Button): {type: string; Children: any; onclick: Function} {

//     return <h1 onclick={onclick} ></h1>;
// }
const Button: React.FC<Button> = ({ type, Children, onclick, title }) => {
    return <button>{title}</button>;
};
export default Button;
