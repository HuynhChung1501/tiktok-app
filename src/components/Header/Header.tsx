import images from '~/asset/images';
import Button from '~/components/Button/Button';

function Header() {
    return (
        <div>
            <img src={images.logo} alt="TikTok" />
            <div>
                <input type="text" />
                <Button title="button" />
            </div>
        </div>
    );
}

export default Header;
