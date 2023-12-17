import BasicButton from '../components/BasicButton'
import BasicInput from '../components/BasicInput'
const SignUpForm = () => {
	return (
		<>
			<BasicButton>로그인</BasicButton>
			<br />
			<BasicButton variant={'secondary'} shape={'round'} size={'medium'}>
				회원가입
			</BasicButton>
			<BasicInput
				label={'이메일'}
				placeholder={'이메일을 입력해주세요.'}
				primary={true}
				width={500}
				height={50}
			/>
		</>
	)
}

export default SignUpForm
