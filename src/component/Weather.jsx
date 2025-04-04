import React from 'react'

// 1. 앱 실행시, 현재 위치 기반의 날씨 정보 출력
// 2. 날씨 정보: 도시, 섭씨, 화씨, 날씨 상태
// 3. 5개의 버튼 (1개: 현재위치, 4개: 원하는 도시)
// 4. 버튼 클릭시, 해당 버튼 도시 날씨 출력
// 5. 현재위치 버튼 클릭시, 다시 현재 위치 기반의 날씨가 나옴
// 6. 데이터 가져올때, 로딩 스피너 사용

const Weather = ({weatherInfo, }) => {
  console.log('Weather Info:', weatherInfo);

  if (!weatherInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <h3 style={{ color: 'black' }}>
          {weatherInfo?.city}
        </h3>
      </div>
      <div>
        <h1 style={{ color: 'green' }}>
          {weatherInfo?.celsius} °C / {weatherInfo?.fahrenheit} °F
        </h1>
      </div>
      <div>
        <h2 style={{ color: 'skyblue' }}>
          {weatherInfo?.weather}
        </h2>
      </div>
    </div>
  )
}

export default Weather