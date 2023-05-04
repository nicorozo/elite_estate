import { BsFillTelephoneFill, BsFillChatLeftDotsFill, BsTwitter } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
const data = [
    {
        icon: <BsFillTelephoneFill />,
        action: 'Call',
        detail: '124 642 4212'
    },
    {
        icon: <BsFillChatLeftDotsFill />,
        action: 'Chat',
        detail: '124 642 4212'
    },
    {
        icon: <MdEmail />,
        action: 'Email',
        detail: 'email@email.com'
    },
    {
        icon: <BsTwitter />,
        action: 'Twitter',
        detail: '@Account_name'
    },
]

export default data