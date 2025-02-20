import { world } from "@minecraft/server";

// 获取当前时间的格式化字符串
function getTimeString() {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
}

// 监听玩家在方块上使用物品（新版 API）
world.afterEvents.itemUseOn.subscribe(event => {
    let player = event.source; // 获取玩家
    let item = event.itemStack; // 获取物品

    if (item.typeId === "minecraft:lava_bucket") { // 检测是否是岩浆桶
        let pos = event.block.location;
        let logMessage = `[${getTimeString()}] 玩家 ${player.name} (ID: ${player.id}) 在 X:${pos.x}, Y:${pos.y}, Z:${pos.z} 放置了岩浆。`;

        console.warn(logMessage); // 输出到 BDS 控制台
        world.sendMessage(`⚠ 侦测到岩浆放置`); // 发送到游戏聊天
    }
});