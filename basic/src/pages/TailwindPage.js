import TWTab from 'Tailwind/Tab'
import TWBasicButton from 'Tailwind/BasicButton'
import TWBasicInput from 'Tailwind/BasicInput'
import TwCheckBox from 'Tailwind/CheckBox'
import TWSelectBox from 'Tailwind/SelectBox'

const TailwindPage = () => {
	return (
		<div>
			<TWBasicButton variant={'primary'} size={'small'} children="small" />
			<TWBasicButton variant={'seconday'} size={'medium'} children="medium" />
			<TWBasicButton variant={'primary'} size={'large'} children="large" />
			<TWBasicInput
				variant={'secondary'}
				size={'small'}
				label={'secondary-small'}
				placeholder={'비밀번호를 입력하세요.'}
			/>
			<TWBasicInput
				primary={true}
				size={'medium'}
				label={'primary-medi'}
				placeholder={'아이디를 입력하세요.'}
			/>
			<TWBasicInput
				variant={'secondary'}
				size={'large'}
				label={'secondary-large'}
				placeholder={'비밀번호를 입력하세요.'}
			/>
			<div style={{ width: '600px' }}>
				<TWBasicInput
					variant={'secondary'}
					size={'full'}
					label={'secondary-full'}
					placeholder={'비밀번호를 입력하세요.'}
				/>
			</div>
			<TwCheckBox id={1} size={'large'} label={'고등학생'} />
			<TwCheckBox id={2} size={'small'} label={'대학생'} />
			<TwCheckBox id={3} size={'medium'} label={'직장인'} />
			<TWSelectBox size={'small'} />
			<TWSelectBox size={'medium'} />
			<TWSelectBox size={'large'} />
			<TWTab />
		</div>
	)
}

export default TailwindPage
