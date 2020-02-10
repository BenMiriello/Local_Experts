import React from 'react'
import {Modal, Button, Header, Image, Description, Content} from 'semantic-ui-react'

class ExperienceModal extends React.Component{

    render(){
        return(
            // <div className="ui modal">
            //     <i className="close icon"></i>
            //     <div className="header">
            //         Profile Picture
            //     </div>
            //     <div className="image content">
            //         <div className="ui medium image">
            //             <img src="/images/avatar/large/chris.jpg">
            //         </div>
            //         <div className="description">
            //             <div className="ui header">We've auto-chosen a profile image for you.</div>
            //                 <p>We've grabbed the following image from the <a href="https://www.gravatar.com" target="_blank">gravatar</a> image associated with your registered e-mail address.</p>
            //                 <p>Is it okay to use this photo?</p>
            //             </div>
            //         </div>
            //         <div className="actions">
            //             <div className="ui black deny button">
            //                 Nope
            //             </div>
            //             <div className="ui positive right labeled icon button">
            //                 Yep, that's me
            //                 <i className="checkmark icon"></i>
            //             </div>
            //         </div>
            //     </div>
            // </div>
            <Modal trigger={<Button>Show Modal</Button>}>
                <Modal.Header>Select a Photo</Modal.Header>
                <Modal.Content image>
                    <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
                    <Modal.Description>
                        <Header>Default Profile Image</Header>
                        <p>
                        We've found the following gravatar image associated with your e-mail
                        address.
                        </p>
                        <p>Is it okay to use this photo?</p>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        )
    }
}

export default ExperienceModal

