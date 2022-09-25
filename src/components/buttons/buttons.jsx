import { Ancora, DivButton, DivIcon, Texto } from "./style";
import { SocialIcon } from 'react-social-icons';

function Buttons() {

    return(
        <>
            <Ancora href="https://www.facebook.com/barretusstudio/" target="_blank">
                <DivButton>
                    <DivIcon>
                        <SocialIcon network="facebook" style={{ height: 34, width: 34 }} />
                    </DivIcon>
                    <Texto>Facebook</Texto>
                </DivButton>
            </Ancora>
            <Ancora href="https://www.instagram.com/barretusstudio/" target="_blank">
                <DivButton>
                    <DivIcon>
                        <SocialIcon network="instagram" style={{ height: 34, width: 34 }} />
                    </DivIcon>
                    <Texto>Instagram</Texto>
                </DivButton>
            </Ancora>
            <Ancora href="https://api.whatsapp.com/send/?phone=5581985748550" target="_blank">
                <DivButton>
                    <DivIcon>
                        <SocialIcon network="whatsapp" style={{ height: 34, width: 34 }} />
                    </DivIcon>
                    <Texto>WhatsApp</Texto>
                </DivButton>
            </Ancora>
            <Ancora href="mailto:barretus@gmail.com" target="_blank">
                <DivButton>
                    <DivIcon>
                        <SocialIcon network="email" style={{ height: 34, width: 34 }} />
                    </DivIcon>
                    <Texto>E-mail</Texto>
                </DivButton>
            </Ancora>
        </>
    )

}

export default Buttons;