import BasicButton from '../components/BasicButton'

const SignUpForm = () => {
	return (
		<>
			<BasicButton variant={'primary'} shape={'shape'} size={'small'}>
				로그인
			</BasicButton>
			<br />
			<BasicButton variant={'secondary'} shape={'round'} size={'medium'}>
				회원가입
			</BasicButton>
		</>
	)
}

export default SignUpForm
