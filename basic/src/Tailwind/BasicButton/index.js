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
			<div className="w-[110px] h-30 relative">
				<button className="text-white w-full font-extrabold bg-light-blue rounded-full p-5 h-12 flex justify-center items-center  font-extrsabold hover:bg-blue cursor-pointer">
					회원 가입
				</button>
				<div className="p-[2px] rounded-full  bg-error text-white font-extrabold w-[40px] h-[35px] flex justify-center items-center absolute -right-4 -top-2">
					100
				</div>
			</div>
		</>
	)
}

export default TWBasicButton
