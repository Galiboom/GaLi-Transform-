import Link from 'next/link';
import { ArrowRight, FileStack, Image, LayoutGrid, LucideIcon, QrCode, Upload, Video } from 'lucide-react';
import { Button, Glass, Shell, Tag } from '@/components/ui';
import { quickTools, tools, toolsByGroup } from '@/lib/tools';

const iconMap: Record<string, LucideIcon> = {
  qr: QrCode,
  markdown: FileStack,
  document: FileStack,
  image: Image,
  media: Video,
  archive: LayoutGrid,
};

export default function HomePage() {
  const quick = quickTools.map((id) => tools.find((tool) => tool.id === id)).filter(Boolean);

  return (
    <Shell>
      <main className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col gap-6 px-4 py-4 md:px-6">
        <header className="flex flex-wrap items-center justify-between gap-4 rounded-[28px] border border-white/70 bg-white/80 px-5 py-4 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur-xl">
          <div className="space-y-1">
            <div className="text-lg font-semibold tracking-tight text-slate-900">GaLi Transform</div>
            <div className="text-sm text-slate-500">上传、转换、下载，一条线完成。</div>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/jobs"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              <ArrowRight className="h-4 w-4" />
              任务状态
            </Link>
          </div>
        </header>

        <section className="grid gap-4 xl:grid-cols-[1.6fr_0.95fr]">
          <Glass className="overflow-hidden">
            <div className="border-b border-slate-200/70 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_32%),linear-gradient(135deg,#ffffff_0%,#f7fbff_100%)] px-6 py-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                工具矩阵
              </div>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">多格式转换工作台</h1>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-500">
                二维码、Markdown、文档、图片、音视频与压缩任务都在这里直接处理，先看见能力，再进入具体流程。
              </p>
            </div>

            <div className="grid gap-5 px-6 py-6 xl:grid-cols-[1.05fr_0.95fr]">
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <div className="text-sm font-medium text-slate-900">常用转换</div>
                  <span className="text-xs text-slate-500">点击直达工具页</span>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  {quick.map((tool) => {
                    if (!tool) return null;
                    const Icon = iconMap[tool.category];
                    return (
                      <Link
                        key={tool.id}
                        href={`/tools/${tool.id}`}
                        className="group rounded-[24px] border border-white/80 bg-white/90 p-4 shadow-[0_14px_36px_rgba(15,23,42,0.05)] transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_40px_rgba(37,99,235,0.09)]"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <span className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-2.5 text-blue-600 ring-1 ring-blue-100">
                              <Icon className="h-5 w-5" />
                            </span>
                            <div>
                              <div className="flex items-center gap-2">
                                <h2 className="text-sm font-semibold text-slate-900">{tool.name}</h2>
                                {tool.beta ? <Tag>Beta</Tag> : null}
                              </div>
                              <div className="text-xs text-slate-500">{tool.group}</div>
                            </div>
                          </div>
                          <ArrowRight className="h-4 w-4 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-slate-700" />
                        </div>
                        <p className="mt-3 text-sm leading-6 text-slate-500">{tool.description}</p>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {tool.input.map((item) => (
                            <Tag key={item}>{item}</Tag>
                          ))}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-[24px] border border-white/80 bg-white/90 p-4 shadow-[0_14px_36px_rgba(15,23,42,0.05)]">
                  <div className="text-sm font-medium text-slate-900">快速开始</div>
                  <div className="mt-2 text-sm leading-6 text-slate-500">
                    直接选择文件，或者拖拽到当前工具页。转换后生成随机 ID 下载链接，适合短期处理和归档。
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Button>
                      <Upload className="h-4 w-4" />
                      选择文件
                    </Button>
                    <Button>开始转换</Button>
                  </div>
                </div>

                <div className="rounded-[24px] border border-white/80 bg-white/90 p-4 shadow-[0_14px_36px_rgba(15,23,42,0.05)]">
                  <div className="text-sm font-medium text-slate-900">任务摘要</div>
                  <div className="mt-4 space-y-3">
                    {['queued', 'processing', 'success', 'failed'].map((status, index) => (
                      <div key={status} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50/80 px-3 py-2 text-sm">
                        <span className="text-slate-800">任务 {index + 1}</span>
                        <span className="text-slate-500">{status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Glass>

          <div className="grid gap-4">
            <Glass className="p-5">
              <Tag>状态感知</Tag>
              <div className="mt-4 grid gap-3">
                <div className="rounded-[24px] border border-slate-200 bg-slate-50/80 p-4">
                  <div className="text-sm font-medium text-slate-900">上传校验</div>
                  <div className="mt-1 text-sm text-slate-500">真实文件类型校验，而不是只看扩展名。</div>
                </div>
                <div className="rounded-[24px] border border-slate-200 bg-slate-50/80 p-4">
                  <div className="text-sm font-medium text-slate-900">隔离执行</div>
                  <div className="mt-1 text-sm text-slate-500">任务在 worker 工作目录里执行。</div>
                </div>
                <div className="rounded-[24px] border border-slate-200 bg-slate-50/80 p-4">
                  <div className="text-sm font-medium text-slate-900">结果保留</div>
                  <div className="mt-1 text-sm text-slate-500">默认 24 小时后自动删除。</div>
                </div>
              </div>
            </Glass>

            <Glass className="p-5">
              <Tag>工具分组</Tag>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {toolsByGroup.map((group) => (
                  <div key={group} className="rounded-[24px] border border-slate-200 bg-slate-50/80 p-4">
                    <div className="text-sm font-medium text-slate-900">{group}</div>
                    <div className="mt-1 text-sm text-slate-500">
                      {tools.filter((tool) => tool.group === group).length} 个转换能力
                    </div>
                  </div>
                ))}
              </div>
            </Glass>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-[1fr_1.2fr]">
          <Glass className="p-5">
            <Tag>产品结构</Tag>
            <div className="mt-4 grid gap-3">
              <div className="rounded-[24px] border border-slate-200 bg-slate-50/80 p-4">
                <div className="text-sm font-medium text-slate-900">工具矩阵</div>
                <div className="mt-1 text-sm text-slate-500">所有转换能力的入口总览。</div>
              </div>
              <div className="rounded-[24px] border border-slate-200 bg-slate-50/80 p-4">
                <div className="text-sm font-medium text-slate-900">单工具工作台</div>
                <div className="mt-1 text-sm text-slate-500">每个工具都有自己的上传、参数和结果区。</div>
              </div>
              <div className="rounded-[24px] border border-slate-200 bg-slate-50/80 p-4">
                <div className="text-sm font-medium text-slate-900">任务状态页</div>
                <div className="mt-1 text-sm text-slate-500">追踪排队、处理中、成功、失败、超时与过期。</div>
              </div>
            </div>
          </Glass>

          <Glass className="p-5">
            <Tag>全部工具</Tag>
            <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {tools.map((tool) => {
                const Icon = iconMap[tool.category];
                return (
                  <Link
                    key={tool.id}
                    href={`/tools/${tool.id}`}
                    className="group rounded-[24px] border border-white/80 bg-white/90 p-4 shadow-[0_12px_28px_rgba(15,23,42,0.05)] transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_42px_rgba(37,99,235,0.08)]"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="rounded-2xl bg-slate-50 p-2 text-slate-700 ring-1 ring-slate-200">
                          <Icon className="h-4 w-4" />
                        </span>
                        <div>
                          <div className="text-sm font-semibold text-slate-900">{tool.name}</div>
                          <div className="text-xs text-slate-500">{tool.group}</div>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-slate-700" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </Glass>
        </section>
      </main>
    </Shell>
  );
}
