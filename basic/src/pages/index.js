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
			<BasicButton
				variant={'primary'}
				badge={{ value: 7, type: 'alert' }}
				shape={'round'}
				size={'medium'}
				border={false}
			>
				회원가입
			</BasicButton>
			<br />
			<BasicButton
				variant={'secondary'}
				badge={{ value: 2, type: 'warn' }}
				shape={'default'}
				size={'medium'}
				border={false}
			>
				회원가입
			</BasicButton>
			<div style={{ width: 600 }}>
				<BasicInput
					label={'small'}
					placeholder={'비밀번호를 입력해주세요.'}
					primary={false}
					size={'small'}
				/>
				<BasicInput
					label={'medium'}
					placeholder={'이메일을 입력해주세요.'}
					primary={true}
					size={'medium'}
				/>
				<BasicInput
					label={'large'}
					placeholder={'비밀번호를 입력해주세요.'}
					primary={false}
					size={'large'}
				/>
				<BasicInput
					label={'full'}
					placeholder={'비밀번호를 입력해주세요.'}
					primary={false}
					size={'full'}
				/>
			</div>
			<SelectBox data={mockSelect} size={'small'} />
			<SelectBox data={mockSelect} size={'medium'} />
			<SelectBox data={mockSelect} size={'large'} />
			<Tab data={navbarList} variant={'primary'} />
			<Tab data={navbarList} variant={'secondary'} />
			<CheckBox
				type="checkbox"
				label={'로그인 상태 유지'}
				id={'small'}
				size={'small'}
			/>
			<CheckBox
				type="checkbox"
				label={'로그인 상태 유지'}
				id={'medium'}
				size={'medium'}
			/>
			<CheckBox
				type="checkbox"
				label={'로그인 상태 유지'}
				id={'large'}
				size={'large'}
			/>
		</>
	)
}

export default SignUpForm
