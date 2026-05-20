enemies.forEach((enemy, eIndex) => {
  enemy.y += enemy.speed;

  // Remove enemy if it leaves screen
  if (enemy.y > canvas.height) {
    enemies.splice(eIndex, 1);
    return;
  }

  // Enemy crashes into player
  if (
    enemy.x < player.x + player.width &&
    enemy.x + enemy.width > player.x &&
    enemy.y < player.y + player.height &&
    enemy.y + enemy.height > player.y
  ) {
    gameOver = true;
  }

  // Your bullets hit enemy
  bullets.forEach((bullet, bIndex) => {
    if (
      bullet.x < enemy.x + enemy.width &&
      bullet.x + 5 > enemy.x &&
      bullet.y < enemy.y + enemy.height &&
      bullet.y + 10 > enemy.y
    ) {
      enemies.splice(eIndex, 1);
      bullets.splice(bIndex, 1);
      score += 10;
    }
  });
});
