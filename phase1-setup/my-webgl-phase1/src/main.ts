// style.cssを読み込む（Viteの機能）
import './style.css'

// ボタン要素を取得（型アサーションでHTMLButtonElementであることを明示）
const button = document.querySelector<HTMLButtonElement>('#change-color-btn');
const body = document.body;

// ランダムな色（16進数カラーコード）を生成する関数
const getRandomColor = (): string => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// ボタンが存在するかチェックしてからイベントを追加
if (button) {
  button.addEventListener('click', () => {
    const newColor = getRandomColor();
    body.style.backgroundColor = newColor;
    
    // 現在の色をコンソールにも出す（デバッグ練習）
    console.log(`Changed color to: ${newColor}`);
  });
}