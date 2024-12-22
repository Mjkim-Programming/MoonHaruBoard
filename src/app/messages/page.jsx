import { getMessages } from "../(fetching)/fetch";

export const metadata = {
    title: 'MoonHaruBoard',
};

export default async function Messages() {
  let data = await getMessages();

  let cardStyle = {
    width: 20 + 'rem',
    marginBottom: 10 + 'px',
    display:'inline-flex',
    marginRight: 5 + 'px',
    border: '1px solid black'
  }

  return (
    <div className="" style={{marginLeft: 10 + 'px'}}>
      <h1>Happy Birth Day, Moonharu!</h1>
      <h3>생일 축하 메세지를 확인해 보세요:</h3>
      {data && data.map((item, i) => (
          <div className="card" key={i} style={cardStyle}>
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">By {item.writer}</h6>
                <p className="card-text">{item.message}</p>
              </div>
          </div>
        ))}
    </div>
  );
}
