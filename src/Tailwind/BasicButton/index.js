const TWBasicButton = ({ size }) => {
	return (
		<>
			{/*primary*/}
			<div className="w-[100px] h-30 relative">
				<button className="text-white w-full bg-mint rounded p-5 font-extrabold hover:bg-dark-mint cursor-pointer">
					로그인
				</button>
				<div className="p-5 rounded-3xl bg-error text-white font-extrabold w-12 h-5 flex justify-center items-center absolute -right-5 -top-4">
					100
				</div>
			</div>

			{/*secondary*/}
			<div className="w-[120px] h-30 relative">
				<button className="text-white w-full bg-light-blue rounded p-5 font-extrsabold hover:bg-blue cursor-pointer">
					회원 가입
				</button>
				<div className="p-5 rounded-3xl bg-error text-white font-extrabold w-12 h-5 flex justify-center items-center absolute right-5 -top-4">
					100
				</div>
			</div>
		</>
	)
}

export default TWBasicButton
