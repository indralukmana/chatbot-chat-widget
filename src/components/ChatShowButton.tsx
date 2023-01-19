import { BsChatSquareDotsFill } from 'react-icons/bs';

interface ChatShowButtonProps {
	title: string;
}

const ChatShowButton = ({ title }: ChatShowButtonProps) => {
	return (
		<button title={title}>
			<BsChatSquareDotsFill />
			{/*  The IoChatbubbleEllipses import doesn't auto complete */}
			{/* <IoChatbubbleEllipses /> */}
		</button>
	);
};

export default ChatShowButton;
