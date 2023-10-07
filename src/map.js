// 获取按钮和地图元素
const locateButton = document.getElementById('locate-button');
const map = document.getElementById('map');

// 添加按钮点击事件处理程序
locateButton.addEventListener('click', () => {
    // 模拟获取用户的地理位置
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            
            // 在地图上显示用户的位置
            map.innerHTML = `您的位置：<br>纬度: ${latitude.toFixed(6)}<br>经度: ${longitude.toFixed(6)}`;
        }, (error) => {
            // 处理获取位置失败的情况
            map.innerHTML = '无法获取位置信息。';
        });
    } else {
        map.innerHTML = '浏览器不支持地理位置功能。';
    }
});
