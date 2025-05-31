document.getElementById('greeting-button').addEventListener('click', function() {
    alert("Bé Ney! Anh yêu em nhiều lắm, chúc em sinh nhật thật vui vẻ và hạnh phúc!");
});

// Tạo tuyết rơi động
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    const size = Math.random() * 10 + 5; // Random size for snowflake
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 10 + 10}s`; // Random duration for snowflake falling speed

    document.getElementById('snow').appendChild(snowflake);

    // Xóa bông tuyết sau khi rơi xuống để tránh lãng phí bộ nhớ
    setTimeout(() => {
        snowflake.remove();
    }, 10000);
}

// Tạo tuyết rơi liên tục
setInterval(createSnowflake, 100);
