import Link from 'next/link';
import { ArrowLeft, Download, FileUp, PanelTopOpen, Sparkles } from 'lucide-react';
import { Button, Glass, Shell, Tag } from '@/components/ui';
import { getToolById } from '@/lib/tools';

export default async function ToolPage({ params }: { params: Promise<{ toolId: string }> }) {
  const { toolId } = await params;
  const tool = getToolById(toolId);

  if (!tool) {
    return (
      <Shell>
        <main className="mx-auto max-w-4xl px-4 py-6">
          <Glass className="p-8 text-center">
            <div className="text-lg font-semibold text-slate-900">当前没有这个转换模块</div>
            <div className="mt-2 text-sm text-slate-500">返回工具矩阵，选择一个可用的转换入口。</div>
            <div className="mt-5">
              <Link href="/" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800">
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
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-slate-900">
            <ArrowLeft className="h-4 w-4" />
            返回工具矩阵
          </Link>
          <Link href="/jobs" className="inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-slate-900">
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
              <h1 className="text-2xl font-semibold text-slate-900">{tool.name}</h1>
              <Sparkles className="h-4 w-4 text-blue-600" />
            </div>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">{tool.description}</p>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-[24px] border border-slate-200 bg-slate-50/80 p-4">
                <div className="text-sm font-medium text-slate-900">输入格式</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {tool.input.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
              <div className="rounded-[24px] border border-slate-200 bg-slate-50/80 p-4">
                <div className="text-sm font-medium text-slate-900">输出格式</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {tool.output.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[24px] border border-white/80 bg-white/90 p-5 shadow-sm">
                <div className="text-sm font-medium text-slate-900">上传区</div>
                <div className="mt-2 text-sm leading-6 text-slate-500">
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

              <div className="rounded-[24px] border border-slate-200 bg-slate-50/80 p-5">
                <div className="text-sm font-medium text-slate-900">转换参数</div>
                <div className="mt-2 text-sm text-slate-500">首版先展示常见参数位，后续再接真实表单。</div>
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-3 py-2">
                    <span className="text-slate-700">输出质量</span>
                    <span className="text-slate-500">默认</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-3 py-2">
                    <span className="text-slate-700">页面范围</span>
                    <span className="text-slate-500">全部</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-3 py-2">
                    <span className="text-slate-700">保留透明度</span>
                    <span className="text-slate-500">自动</span>
                  </div>
                </div>
              </div>
            </div>
          </Glass>

          <div className="grid gap-4">
            <Glass className="p-5">
              <Tag>结果区</Tag>
              <div className="mt-3 rounded-[24px] border border-slate-200 bg-slate-50/80 p-4 text-sm text-slate-500">
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
                <div className="rounded-[24px] border border-slate-200 bg-slate-50/80 p-3 text-slate-500">排队中：等待 worker 空闲。</div>
                <div className="rounded-[24px] border border-slate-200 bg-slate-50/80 p-3 text-slate-500">处理中：正在执行真实转换。</div>
                <div className="rounded-[24px] border border-slate-200 bg-slate-50/80 p-3 text-slate-500">失败：文件类型、损坏或引擎异常。</div>
              </div>
            </Glass>
          </div>
        </section>
      </main>
    </Shell>
  );
}
