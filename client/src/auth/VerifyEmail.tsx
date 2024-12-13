const VerifyEmail = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="p-8 border border-gray-200 rounded-md w-full max-w-md flex flex-col gap-10">
        <div className="text-center">
          <h1 className="font-extrabold text-2xl"> Verify your email </h1>
          <p className="text-sm text-gray-600">Enter the 6 digit code sent to your email address</p>
        </div>
      </div>
    </div>
  )
}

export default VerifyEmail