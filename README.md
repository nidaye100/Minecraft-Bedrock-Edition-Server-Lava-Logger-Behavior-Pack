# Minecraft-Bedrock-Edition-Server-Lava-Logger-Behavior-Pack
A behavior pack that can track players' use of lava and output the records to the console (log)

# 欢迎使用岩浆日志行为包！
版本：1.0.0

该行为包旨在观测记录基岩版服务器中玩家使用岩浆的时间和地点，并记录玩家id以供找到纵火犯

## 用途：

监听玩家使用物品（如岩浆桶）  
记录玩家放置岩浆的 时间、坐标、ID  
输出日志到 BDS 控制台 和 游戏聊天。  
----------------------------------------------------------------------------

## 路径一览：
```
 behavior_packs/
  ├── LavaLogger/
  │   ├── manifest.json
  │   ├── scripts/
  │   │   ├── lavaLogger.js
  │   ├── pack_icon.png  (可能没有)
```
---------------------------------------------------------------------------

## 启用 Behavior Pack：

 ### 1）在 BDS 服务器根目录 找到 server.properties，确保：

     script-engine=enabled

  如果是 false，需要改为 enabled 并重启服务器。

 ### 2）在server.properties，确保：

    script-engine-enabled=true
      
    script-engine=enabled
      
    content-log-console-output-enabled=true
      
    emit-server-telemetry=true

  前两项如若没有可自行加入。

---------------------------------------------------------------------------

 ## 查看日志：

当玩家倒岩浆时，会看到类似的日志：

[2025-02-20 14:30:12] 玩家 Steve (ID: 12345-67890) 在 X:100.50, Y:64.00, Z:-200.30 放置了岩浆。

这个日志会直接出现在 BDS 终端窗口，同时将会在游戏聊天框显示 "⚠ 侦测到岩浆放置"

---------------------------------------------------------------------------

文件内容及注意事项大致如此，该行为包只可在原版基岩服务器中使用，如有进一步的问题请及时联系作者
1. 该行为包包含两个主要文件，分别是lavaLogger.js的JavaScript和manifest.json的JSON
2. 使用的 API 为@minecraft/server API（版本 1.5.0）
3. 仅在1.21.50版本服务器当中实测过

