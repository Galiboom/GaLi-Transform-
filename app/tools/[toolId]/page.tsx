import Link from 'next/link';
import { ArrowLeft, Download, FileUp, PanelTopOpen, Sparkles } from 'lucide-react';
import { Button, Glass, Shell, Tag } from '@/components/ui';
import { getToolById } from '@/lib/tools';

export default function ToolPage({ params }: { params: { toolId: string } }) {
  const tool = getToolById(params.toolId);

  if (!tool) {
    return (
      <Shell>
        <main className="mx-auto max-w-4xl px-4 py-6">
          <Glass className="p-6">
            <div className="text-lg font-semibold">工具不存在</div>
            <div className="mt-2 text-sm text-muted">这个工作台还没有对应的转换能力。</div>
            <div className="mt-4">
              <Link href="/" className="inline-flex items-center gap-2 rounded-lg border border-line bg-white/5 px-3 py-2 text-sm font-medium transition hover:bg-white/10">
                <ArrowLeft className="h-4 w-4" />
                返回首页
              </Link>
            </div>
          </Glass>
        </main>
      </Shell>
    );
  }

  return (
    <Shell>
      <main className="mx-auto max-w-6xl px-4 py-4">
        <div className="mb-4 flex items-center justify-between gap-3">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-text">
            <ArrowLeft className="h-4 w-4" />
            返回工具矩阵
          </Link>
          <Link href="/jobs" className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-text">
            <PanelTopOpen className="h-4 w-4" />
            查看任务
          </Link>
        </div>

        <section className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <Glass className="p-5">
            <div className="flex flex-wrap items-center gap-2">
              <Tag>{tool.group}</Tag>
              {tool.beta ? <Tag>Beta</Tag> : null}
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <h1 className="text-2xl font-semibold">{tool.name}</h1>
              <Sparkles className="h-4 w-4 text-accent" />
            </div>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{tool.description}</p>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-line bg-white/5 p-4">
                <div className="text-sm font-medium">输入格式</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {tool.input.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
              <div className="rounded-lg border border-line bg-white/5 p-4">
                <div className="text-sm font-medium">输出格式</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {tool.output.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-lg border border-dashed border-line bg-black/15 p-5">
                <div className="text-sm font-medium">上传区</div>
                <div className="mt-2 text-sm leading-6 text-muted">
                  拖入文件或点击选择。后端会做真实文件类型校验，并把任务送进隔离 worker。
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Button>
                    <FileUp className="h-4 w-4" />
                    选择文件
                  </Button>
                  <Button>开始转换</Button>
                </div>
              </div>

              <div className="rounded-lg border border-line bg-white/5 p-5">
                <div className="text-sm font-medium">转换参数</div>
                <div className="mt-2 text-sm text-muted">首版先展示常见参数位，后续再接真实表单。</div>
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex items-center justify-between rounded-md border border-line px-3 py-2">
                    <span>输出质量</span>
                    <span className="text-muted">默认</span>
                  </div>
                  <div className="flex items-center justify-between rounded-md border border-line px-3 py-2">
                    <span>页面范围</span>
                    <span className="text-muted">全部</span>
                  </div>
                  <div className="flex items-center justify-between rounded-md border border-line px-3 py-2">
                    <span>保留透明度</span>
                    <span className="text-muted">自动</span>
                  </div>
                </div>
              </div>
            </div>
          </Glass>

          <div className="grid gap-4">
            <Glass className="p-5">
              <Tag>结果区</Tag>
              <div className="mt-3 rounded-lg border border-line bg-white/5 p-4 text-sm text-muted">
                转换完成后，下载链接会在这里出现，24 小时后自动失效。
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Button>
                  <Download className="h-4 w-4" />
                  下载结果
                </Button>
                <Button>复制链接</Button>
              </div>
            </Glass>

            <Glass className="p-5">
              <Tag>状态说明</Tag>
              <div className="mt-4 space-y-3 text-sm">
                <div className="rounded-lg border border-line bg-white/5 p-3 text-muted">排队中：等待 worker 空闲。</div>
                <div className="rounded-lg border border-line bg-white/5 p-3 text-muted">处理中：正在执行真实转换。</div>
                <div className="rounded-lg border border-line bg-white/5 p-3 text-muted">失败：文件类型、损坏或引擎异常。</div>
              </div>
            </Glass>
          </div>
        </section>
      </main>
    </Shell>
  );
}
