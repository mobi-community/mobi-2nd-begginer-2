import { fontSizeCSS } from 'Tailwind/BasicInput'
import { useState } from 'react'

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

const TWTab = () => {
	const [selectId, setSelectId] = useState()

	const onClickSelect = id => {
		setSelectId(id)
	}

	return (
		<div className="mint w-[1000px] flex h-[50px]">
			{navbarList.map(item => (
				<div
					className="flex items-center w-[100px]"
					onClick={() => {
						onClickSelect(item.id)
					}}
					id={item.id}
					selectId={selectId}
				>
					{item.id == selectId && (
						<div className="flex justify-center w-[6px] h-[6px] rounded-full bg-mint" />
					)}
					<div
						id={item.id}
						selectId={selectId}
						className={`flex justify-center w-[100px] pl-[3px] ${
							fontSizeCSS['medium']
						} ${item.id == selectId && `text-mint`}
            ${item.id == selectId && `border-b-[3px] border-mint`}`}
					>
						{item.title}
					</div>
				</div>
			))}
		</div>
	)
}

export default TWTab
