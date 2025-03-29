# 贡献指南

感谢你考虑为 Lied Sol 项目做出贡献！

## 开发流程

1. Fork 这个仓库
2. 创建你的功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

## 提交信息规范

我们使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范。每个提交信息都应该遵循以下格式：

```
<类型>[可选的作用域]: <描述>

[可选的正文]

[可选的页脚]
```

类型必须是以下之一：
- feat: 新功能
- fix: Bug修复
- docs: 文档更改
- style: 不影响代码含义的更改（空白、格式化等）
- refactor: 既不修复bug也不添加功能的代码更改
- perf: 性能优化
- test: 添加或修正测试
- chore: 构建过程或辅助工具的变动

## 代码风格

- 使用 TypeScript
- 遵循 ESLint 规则
- 使用 Prettier 进行代码格式化
- 组件使用函数式组件
- 使用 CSS Modules 或 Tailwind CSS 进行样式设计

## Pull Request 流程

1. 确保你的 PR 包含以下内容：
   - 清晰的标题和描述
   - 如果适用，包含相关 issue 的链接
   - 更新相关文档
   
2. PR 会经过以下审查：
   - 代码审查
   - 自动化测试
   - 性能影响评估

## 开发设置

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm run dev
```

3. 运行测试：
```bash
npm test
```

## 问题反馈

如果你发现了 bug 或者有新功能建议，请先查看 [issue 列表](https://github.com/Keasano/Liedsol/issues) 确保没有重复。如果没有相关 issue，请创建一个新的。

## 行为准则

请参阅我们的 [行为准则](CODE_OF_CONDUCT.md)。 