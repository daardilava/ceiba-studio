import { MitiMascot, MitiWordmark } from '@/components/brand/miti';
import type { Dictionary } from '@/i18n/types';

type MitiCopy = Dictionary['mitimiti'];

const rowStyles = [
  { tint: '#E1F1E8', color: '#2E7D5B' },
  { tint: '#FBE6DA', color: '#B4501F' },
  { tint: '#DDEDF5', color: '#22668A' },
] as const;

/** Illustrative amounts paid by each partner; numbers are not translated. */
const paid = { diego: 2812900, ana: 1009000, diegoLabel: '$2.812.900', anaLabel: '$1.009.000' };

/** Illustrative welcome screen. Hidden on small phones to save space. */
export function WelcomePhone({ t }: { t: MitiCopy['welcomeScreen'] }) {
  return (
    <div
      role="img"
      aria-label={t.label}
      className="bg-miti-navy-2 -mb-px hidden h-[470px] w-[230px] rounded-t-[36px] px-2.5 pt-2.5 sm:block"
    >
      <div className="bg-miti-navy flex h-full flex-col gap-2.5 rounded-t-[28px] px-4 py-6 text-white">
        <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
          <MitiMascot className="size-24" />
          <MitiWordmark onDark className="font-rounded text-[28px] font-semibold" />
          <span className="text-miti-mist text-[11px] leading-normal">{t.tagline}</span>
        </div>
        <span className="bg-miti-coral-light text-miti-navy flex h-[34px] items-center justify-center rounded-[10px] text-[11px] font-bold">
          {t.createAccount}
        </span>
        <span className="border-miti-line flex h-[34px] items-center justify-center rounded-[10px] border text-[10px] font-bold">
          {t.haveInvite}
        </span>
        <span className="text-center text-[10px] font-bold underline">{t.logIn}</span>
      </div>
    </div>
  );
}

/** Illustrative home screen with the couple's balance, budget and recent expenses. */
export function HomePhone({ t }: { t: MitiCopy['homeScreen'] }) {
  return (
    <div
      role="img"
      aria-label={t.label}
      className="bg-miti-navy-2 -mb-px h-[560px] w-[270px] shrink-0 rounded-t-[40px] px-2.5 pt-2.5"
    >
      <div className="text-miti-navy flex h-full flex-col gap-2.5 overflow-hidden rounded-t-[32px] bg-[#F3F5F4] px-3.5 pt-[22px]">
        <div className="flex items-center gap-2">
          <div className="flex">
            <span className="flex size-[30px] items-center justify-center rounded-full bg-[#DCE5FA] text-[13px] font-bold text-[#1F4FB8]">
              D
            </span>
            <span className="-ml-2 flex size-[30px] items-center justify-center rounded-full border-2 border-[#F3F5F4] bg-[#FFE3DA] text-[13px] font-bold text-[#9E3418]">
              A
            </span>
          </div>
          <div>
            <p className="m-0 text-[10px] font-bold text-[#5A6275]">{t.month}</p>
            <p className="font-rounded m-0 text-sm font-bold">{t.couple}</p>
          </div>
        </div>

        <div className="bg-miti-navy flex flex-col gap-1 rounded-[18px] p-3.5 text-white">
          <span className="text-miti-mist text-[11px] font-bold">{t.owesYou}</span>
          <span className="font-rounded text-[30px] font-bold tabular-nums">{t.balance}</span>
          <span className="text-[9.5px] text-[#B4BACA]">{t.includes}</span>
          <span className="text-miti-navy mt-1.5 flex h-[30px] items-center justify-center rounded-[9px] bg-white text-[10.5px] font-bold">
            {t.settleUp}
          </span>
        </div>

        <div className="flex flex-col gap-2 rounded-[14px] border border-[#E3E6E8] bg-white p-[11px]">
          <div className="flex justify-between text-[10.5px] font-bold">
            <span>{t.spentTogether}</span>
            <span className="font-rounded text-xs">{t.spentTotal}</span>
          </div>
          <div className="flex h-[7px] gap-0.5 overflow-hidden rounded">
            <span className="bg-[#1F4FB8]" style={{ flex: paid.diego }} />
            <span className="bg-miti-coral-light" style={{ flex: paid.ana }} />
          </div>
          <div className="flex gap-2.5 text-[9px] text-[#5A6275]">
            <span className="flex-1">
              {t.paidByDiego}
              <br />
              <strong className="text-miti-navy text-[11px]">{paid.diegoLabel}</strong>
            </span>
            <span className="flex-1">
              {t.paidByAna}
              <br />
              <strong className="text-miti-navy text-[11px]">{paid.anaLabel}</strong>
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-[7px] rounded-[14px] border border-[#E3E6E8] bg-white p-[11px]">
          <div className="flex justify-between text-[10.5px] font-bold">
            <span>{t.budget}</span>
            <span className="text-[#5A6275]">72% ›</span>
          </div>
          <div className="h-[7px] overflow-hidden rounded bg-[#E3E6E8]">
            <div className="h-full w-[72%] bg-[#0F7B6C]" />
          </div>
          <div className="flex justify-between text-[9px] text-[#5A6275]">
            <span>{t.budgetProgress}</span>
            <span>{t.daysLeft}</span>
          </div>
        </div>

        <p className="font-rounded m-0 mt-0.5 text-[13px] font-bold">{t.recent}</p>
        <div className="rounded-[14px] border border-[#E3E6E8] bg-white px-2.5 py-0.5">
          {t.rows.map((row, i) => {
            const style = rowStyles[i % rowStyles.length]!;
            return (
              <div
                key={row.title}
                className="flex items-center gap-2 border-b border-[#E3E6E8] py-2 last:border-b-0"
              >
                <span
                  className="flex size-[26px] flex-none items-center justify-center rounded-lg"
                  style={{ background: style.tint }}
                >
                  <span className="size-[9px] rounded-[3px]" style={{ background: style.color }} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="m-0 truncate text-[10.5px] font-bold">{row.title}</p>
                  <p className="m-0 mt-px text-[8.5px] text-[#5A6275]">{row.meta}</p>
                </div>
                <div className="text-right">
                  <p className="m-0 text-[10.5px] font-bold">{row.amount}</p>
                  <p
                    className={`m-0 mt-px text-[8.5px] font-bold ${row.owed ? 'text-[#0B6E60]' : 'text-[#B4232C]'}`}
                  >
                    {row.effect}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/**
 * Full, slightly tilted phone for the Ceiba Studio home hero: balance, shared
 * spending, recent expenses and the app's tab bar.
 */
export function HeroPhone({
  t,
  className = '',
}: {
  t: MitiCopy['homeScreen'];
  className?: string;
}) {
  const tabs = [t.tabs.home, t.tabs.activity, null, t.tabs.summary, t.tabs.settings];

  return (
    <div
      role="img"
      aria-label={t.label}
      className={`border-forest-ink h-[580px] w-[290px] shrink-0 rounded-[48px] border-[10px] bg-[#0d120f] shadow-[0_30px_80px_-20px_rgb(0_0_0/0.55)] ${className}`}
    >
      <div className="text-miti-navy relative flex h-full flex-col overflow-hidden rounded-[38px] bg-[#F3F5F4]">
        <div className="flex flex-1 flex-col gap-2.5 overflow-hidden px-3.5 pt-6">
          <div className="flex items-center gap-2">
            <div className="flex">
              <span className="flex size-[30px] items-center justify-center rounded-full bg-[#DCE5FA] text-[13px] font-bold text-[#1F4FB8]">
                D
              </span>
              <span className="-ml-2 flex size-[30px] items-center justify-center rounded-full border-2 border-[#F3F5F4] bg-[#FFE3DA] text-[13px] font-bold text-[#9E3418]">
                A
              </span>
            </div>
            <div>
              <p className="m-0 text-[10px] font-bold text-[#5A6275]">{t.month}</p>
              <p className="font-rounded m-0 text-sm font-bold">{t.couple}</p>
            </div>
          </div>

          <div className="flex flex-col gap-1 rounded-[18px] bg-[#1b1d22] p-3.5 text-white">
            <span className="text-miti-mist text-[11px] font-bold">{t.owesYou}</span>
            <span className="font-rounded text-[32px] font-bold tabular-nums">{t.balance}</span>
            <span className="text-[9.5px] text-[#B4BACA]">{t.includes}</span>
            <span className="mt-1.5 flex h-[32px] items-center justify-center rounded-full bg-white text-[11px] font-bold text-[#1b1d22]">
              {t.settleUp}
            </span>
          </div>

          <div className="flex flex-col gap-2 rounded-[14px] border border-[#E3E6E8] bg-white p-[11px]">
            <div className="flex justify-between gap-2 text-[10.5px] font-bold">
              <span>{t.spentTogether}</span>
              <span className="font-rounded text-xs">{t.spentTotal}</span>
            </div>
            <div className="flex h-[7px] gap-0.5 overflow-hidden rounded">
              <span className="bg-[#1F4FB8]" style={{ flex: paid.diego }} />
              <span className="bg-miti-coral-light" style={{ flex: paid.ana }} />
            </div>
            <div className="flex gap-2.5 text-[9px] text-[#5A6275]">
              <span className="flex-1">
                {t.paidByDiego}
                <br />
                <strong className="text-miti-navy text-[11px]">{paid.diegoLabel}</strong>
              </span>
              <span className="flex-1">
                {t.paidByAna}
                <br />
                <strong className="text-miti-navy text-[11px]">{paid.anaLabel}</strong>
              </span>
            </div>
          </div>

          <p className="font-rounded m-0 mt-0.5 text-[13px] font-bold">{t.recent}</p>
          <div className="rounded-[14px] border border-[#E3E6E8] bg-white px-2.5 py-0.5">
            {t.rows.slice(0, 2).map((row, i) => {
              const style = rowStyles[i % rowStyles.length]!;
              return (
                <div
                  key={row.title}
                  className="flex items-center gap-2 border-b border-[#E3E6E8] py-2 last:border-b-0"
                >
                  <span
                    className="flex size-[26px] flex-none items-center justify-center rounded-lg"
                    style={{ background: style.tint }}
                  >
                    <span
                      className="size-[9px] rounded-[3px]"
                      style={{ background: style.color }}
                    />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="m-0 truncate text-[10.5px] font-bold">{row.title}</p>
                    <p className="m-0 mt-px text-[8.5px] text-[#5A6275]">{row.meta}</p>
                  </div>
                  <div className="text-right">
                    <p className="m-0 text-[10.5px] font-bold">{row.amount}</p>
                    <p
                      className={`m-0 mt-px text-[8.5px] font-bold ${row.owed ? 'text-[#0B6E60]' : 'text-[#B4232C]'}`}
                    >
                      {row.effect}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex h-[62px] flex-none items-center justify-around border-t border-[#E3E6E8] bg-white px-1.5 text-[8px] font-bold text-[#5A6275]">
          {tabs.map((label, i) =>
            label === null ? (
              <span
                key="add"
                className="flex size-9 items-center justify-center rounded-full bg-[#1b1d22] text-lg leading-none text-white"
              >
                +
              </span>
            ) : (
              <span key={label} className={i === 0 ? 'text-miti-navy' : undefined}>
                {label}
              </span>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
