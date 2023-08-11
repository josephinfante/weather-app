export const Icons = (type: string) => {
  switch (type) {
    case 'search':
      return <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="current-text">
                <path d="M17 17L13.889 13.8889M16.1111 8.55556C16.1111 12.7284 12.7284 16.1111 8.55556 16.1111C4.38274 16.1111 1 12.7284 1 8.55556C1 4.38274 4.38274 1 8.55556 1C12.7284 1 16.1111 4.38274 16.1111 8.55556Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>      
    case 'location':
      return <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="current-text">
                <path d="M7.4 9.8C8.72548 9.8 9.8 8.72548 9.8 7.4C9.8 6.07452 8.72548 5 7.4 5C6.07452 5 5 6.07452 5 7.4C5 8.72548 6.07452 9.8 7.4 9.8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.4 17C10.6 13.8 13.8 10.9346 13.8 7.4C13.8 3.86538 10.9346 1 7.4 1C3.86538 1 1 3.86538 1 7.4C1 10.9346 4.2 13.8 7.4 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
    default:
      return ''
  }
}