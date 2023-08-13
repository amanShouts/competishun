export function Login({ handleLogin }) {
    return (
        <div>
            login Page
            <button onClick={handleLogin} className="rounded border-2 bg-slate-400 text-white p-5"> Login here </button>
        </div>
    )
}