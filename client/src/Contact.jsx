import Avatar from './Avatar'

const Contact = ({ id, onClick, username, selected, online }) => {
    return (
        <div key={id} onClick={() => onClick(id)} className={"border-b border-grey-100 flex items-center gap-3 cursor-pointer " + (selected ? 'bg-blue-50' : '')}>
            {selected &&( <div className="w-1 bg-blue-500 h-14 rounded-r-md"></div>)}
            <div className="flex gap-3 py-2 pl-2 items-center">
                <Avatar online={online} userId={id} username={username} />
                <span className="text-grey-800">{username}</span>
            </div>
        </div>
  )
}

export default Contact