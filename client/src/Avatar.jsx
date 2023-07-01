export default function Avatar ({userId, username}) {
    const colors = ['bg-blue-200', 'bg-red-200', 'bg-yellow-200', 'bg-green-200', 'bg-purple-200']
    const userIdBase10 = parseInt(userId, 16)
    const colorIndex = userIdBase10 % colors.length;
    const color = colors[colorIndex]
    return (
        <div className={"h-12 w-12 rounded-full flex items-center " + color}>
            <div className="w-full text-center opacity-70">{username[0]}</div>
        </div>
    )
}