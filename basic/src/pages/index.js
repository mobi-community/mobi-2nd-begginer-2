import BasicButton from 'components/BasicButton'
import BasicInput from 'components/BasicInput'
import Tab from 'components/Tab'
import SelectBox from 'components/SelectBox'
import CheckBox from 'components/CheckBox'

export const mockSelect = ['option1', 'option2', 'option3', 'option4']
export const navbarList = [
	{
		title: '메일',
		id: 1,
	},
	{
		title: '카페',
		id: 2,
	},
	{
		title: '블로그',
		id: 3,
	},
	{
		title: '쇼핑',
		id: 4,
	},
	{
		title: '뉴스',
		id: 5,
	},
	{
		title: '증권',
		id: 6,
	},
]

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
			<SelectBox data={mockSelect} size={'small'} />
			{/* <Tab data={navbarList} primary={'primary'} /> */}
			<CheckBox type="checkbox" label={'로그인 상태 유지'} id={'Checked'} />
		</>
	)
}

export default SignUpForm
