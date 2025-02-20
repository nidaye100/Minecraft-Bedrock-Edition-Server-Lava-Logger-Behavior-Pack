# 欢迎使用岩浆日志行为包！
版本：1.0.0

该行为包旨在观测记录基岩版服务器中玩家使用岩浆的时间和地点，并记录玩家id以供找到纵火犯

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
1. 作者：nidaye100（ndy100）
2. github:https://github.com/nidaye100/Minecraft-Bedrock-Edition-Server-Lava-Logger-Behavior-Pack/tree/main
3. mail：buquzhijisithe@gmail.com
4. 2025/2/21
