import React, { useState } from 'react';
import { Truck, AlertTriangle, CheckCircle2, Search, Calendar, ChevronDown, Shield, Printer, RefreshCw, MapPin } from 'lucide-react';
import { TopHeader } from '../components/TopHeader';

export default function SmartClipboardPage() {
  const [quantities, setQuantities] = useState({
    valve: 80,
    flange: 250,
    regulator: 60
  });

  const adjustQty = (item: keyof typeof quantities, amount: number) => {
    setQuantities(prev => ({
      ...prev,
      [item]: Math.max(0, prev[item] + amount)
    }));
  };

  return (
    <div className="flex-1 flex flex-col bg-slate-50/50 h-full overflow-hidden">
      
      <TopHeader 
        searchPlaceholder="Search manifest, SKU, BOL, container or trailer #..."
        actionButton={
          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-sm transition-all active:scale-95">
            <RefreshCw className="w-3.5 h-3.5 text-sky-400" />
            <span>Sync Manifest & WMS</span>
          </button>
        }
      />

      {/* SCROLLABLE PAGE CONTAINER */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-7">
        <section className="flex flex-col gap-6">
          
          {/* Page Header & Metrics Banner */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-100 font-mono">AGENT 01</span>
                <span className="text-xs text-slate-400 font-medium">• Supervisor Digital Clipboard</span>
              </div>
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Smart Clipboard & Loading Dispatch</h1>
              <p className="text-xs text-slate-500 mt-1 max-w-2xl">
                Ruggedized tablet interface for outbound staging dock Bay 14. Real-time verification of physical units packed vs ERP purchase order.
              </p>
            </div>
            
            <div className="flex items-center gap-4 bg-slate-50 p-3 rounded-xl border border-slate-200/60 shrink-0">
              <div className="text-right">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">Consignment ID</span>
                <span className="text-sm font-bold font-mono text-slate-800">TRK-2025-084-NL</span>
              </div>
              <div className="h-8 w-px bg-slate-200"></div>
              <div className="text-right">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">Target Destination</span>
                <span className="text-xs font-bold text-slate-800 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-rose-500" /> Rotterdam Port (Maasvlakte)
                </span>
              </div>
            </div>
          </div>

          {/* Tablet Clipboard Card Container */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden mb-12">
            {/* Staging Manifest Header */}
            <div className="px-6 py-4 bg-slate-50/70 border-b border-slate-200/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-sky-500 text-white flex items-center justify-center shadow-sm">
                  <Truck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Active Loading Queue: Trailer #58-BK-TL</h3>
                  <p className="text-[11px] text-slate-500 font-mono">Assigned Carrier: Maersk Logistics BV • Staging Lane 04B</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-500 font-medium">Auto-Syncing:</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  RFID Sensor Active
                </span>
              </div>
            </div>

            {/* Product Items Table */}
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[900px]">
                  <thead>
                    <tr className="border-b border-slate-200 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      <th className="pb-3 pl-3">SKU & Item Details</th>
                      <th className="pb-3 text-center">Batch / Bin</th>
                      <th className="pb-3 text-center">Ordered Qty</th>
                      <th className="pb-3 text-center">Actual Packed (Adjustable)</th>
                      <th className="pb-3">Manual Override Reason</th>
                      <th className="pb-3 text-right pr-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs">
                    
                    {/* Item 1: The Discrepant Row */}
                    <tr className={`transition-colors ${quantities.valve !== 100 ? 'bg-amber-50/40 hover:bg-amber-50/70' : 'hover:bg-slate-50/80'}`}>
                      <td className="py-4 pl-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${quantities.valve !== 100 ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700'}`}>
                            CV
                          </div>
                          <div>
                            <span className="font-bold text-slate-900 block">Cryogenic Titanium Valves (Class-4)</span>
                            <span className="font-mono text-[11px] text-slate-500">SKU-VALVE-8481-90 • Mil-Spec C-91</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 text-center font-mono text-slate-600">BIN-A14-R3</td>
                      <td className="py-4 text-center">
                        <span className="font-mono font-bold text-slate-900 text-sm bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">100</span>
                      </td>
                      <td className="py-4">
                        <div className="flex items-center justify-center gap-2">
                          <button onClick={() => adjustQty('valve', -5)} className="w-8 h-8 rounded-lg bg-white border border-slate-300 hover:border-slate-400 text-slate-700 flex items-center justify-center font-bold text-base active:scale-95 transition shadow-sm">-</button>
                          <input 
                            type="number" 
                            value={quantities.valve}
                            onChange={(e) => setQuantities({...quantities, valve: parseInt(e.target.value) || 0})}
                            className={`w-16 text-center font-mono font-bold text-sm py-1.5 rounded-lg border-2 shadow-inner focus:outline-none ${quantities.valve !== 100 ? 'text-slate-900 border-amber-400 bg-white focus:ring-2 focus:ring-amber-500' : 'border-slate-200 bg-slate-50 text-slate-900'}`} 
                          />
                          <button onClick={() => adjustQty('valve', 5)} className="w-8 h-8 rounded-lg bg-white border border-slate-300 hover:border-slate-400 text-slate-700 flex items-center justify-center font-bold text-base active:scale-95 transition shadow-sm">+</button>
                        </div>
                      </td>
                      <td className="py-4 pr-4">
                        {quantities.valve !== 100 ? (
                          <input type="text" className="w-full bg-white text-slate-800 text-xs px-3 py-2 rounded-lg border border-amber-300 focus:outline-none focus:ring-1 focus:ring-amber-400 font-medium" defaultValue="Only 80 units available in cold storage vault" />
                        ) : (
                          <input type="text" className="w-full bg-slate-50 text-slate-500 text-xs px-3 py-2 rounded-lg border border-slate-200 focus:outline-none" placeholder="No override (complete count)" readOnly />
                        )}
                      </td>
                      <td className="py-4 text-right pr-3">
                        {quantities.valve !== 100 ? (
                          <span className="inline-flex items-center gap-1 font-semibold text-[11px] px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-300">
                            <AlertTriangle className="w-3 h-3 text-amber-600" />
                            <span>Divergence ({quantities.valve - 100})</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 font-semibold text-[11px] px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                            <span>Verified (100/100)</span>
                          </span>
                        )}
                      </td>
                    </tr>

                    {/* Item 2 */}
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-4 pl-3">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-xs shrink-0">SF</div>
                          <div>
                            <span className="font-bold text-slate-900 block">Precision High-Pressure Steel Flanges</span>
                            <span className="font-mono text-[11px] text-slate-500">SKU-FLANGE-7307-29 • DIN 2635</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 text-center font-mono text-slate-600">BIN-C02-R1</td>
                      <td className="py-4 text-center">
                        <span className="font-mono font-bold text-slate-900 text-sm bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">250</span>
                      </td>
                      <td className="py-4">
                        <div className="flex items-center justify-center gap-2">
                          <button onClick={() => adjustQty('flange', -1)} className="w-8 h-8 rounded-lg bg-white border border-slate-300 hover:border-slate-400 text-slate-700 flex items-center justify-center font-bold text-base active:scale-95 transition shadow-sm">-</button>
                          <input type="number" readOnly value={quantities.flange} className="w-16 text-center font-mono font-bold text-slate-900 text-sm py-1.5 rounded-lg border border-slate-200 bg-white focus:outline-none" />
                          <button onClick={() => adjustQty('flange', 1)} className="w-8 h-8 rounded-lg bg-white border border-slate-300 hover:border-slate-400 text-slate-700 flex items-center justify-center font-bold text-base active:scale-95 transition shadow-sm">+</button>
                        </div>
                      </td>
                      <td className="py-4 pr-4">
                        <input type="text" className="w-full bg-slate-50 text-slate-500 text-xs px-3 py-2 rounded-lg border border-slate-200 focus:outline-none" placeholder="No override (complete count)" readOnly />
                      </td>
                      <td className="py-4 text-right pr-3">
                        <span className="inline-flex items-center gap-1 font-semibold text-[11px] px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                          <span>Verified ({quantities.flange}/250)</span>
                        </span>
                      </td>
                    </tr>

                    {/* Item 3 */}
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-4 pl-3">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-xs shrink-0">PR</div>
                          <div>
                            <span className="font-bold text-slate-900 block">Hydraulic Dual-Stage Pressure Regulators</span>
                            <span className="font-mono text-[11px] text-slate-500">SKU-REG-8481-20 • ISO 4401</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 text-center font-mono text-slate-600">BIN-D09-R4</td>
                      <td className="py-4 text-center">
                        <span className="font-mono font-bold text-slate-900 text-sm bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">60</span>
                      </td>
                      <td className="py-4">
                        <div className="flex items-center justify-center gap-2">
                          <button onClick={() => adjustQty('regulator', -1)} className="w-8 h-8 rounded-lg bg-white border border-slate-300 hover:border-slate-400 text-slate-700 flex items-center justify-center font-bold text-base active:scale-95 transition shadow-sm">-</button>
                          <input type="number" readOnly value={quantities.regulator} className="w-16 text-center font-mono font-bold text-slate-900 text-sm py-1.5 rounded-lg border border-slate-200 bg-white focus:outline-none" />
                          <button onClick={() => adjustQty('regulator', 1)} className="w-8 h-8 rounded-lg bg-white border border-slate-300 hover:border-slate-400 text-slate-700 flex items-center justify-center font-bold text-base active:scale-95 transition shadow-sm">+</button>
                        </div>
                      </td>
                      <td className="py-4 pr-4">
                        <input type="text" className="w-full bg-slate-50 text-slate-500 text-xs px-3 py-2 rounded-lg border border-slate-200 focus:outline-none" placeholder="No override (complete count)" readOnly />
                      </td>
                      <td className="py-4 text-right pr-3">
                        <span className="inline-flex items-center gap-1 font-semibold text-[11px] px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                          <span>Verified ({quantities.regulator}/60)</span>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex items-center justify-end gap-3 mt-4 rounded-xl">
                <button className="px-4 py-2 text-slate-600 hover:text-slate-800 font-semibold text-xs rounded-lg transition-colors">
                  Save Draft
                </button>
                <button className={`px-5 py-2 text-white font-semibold text-xs rounded-lg transition-all shadow-sm ${quantities.valve !== 100 ? 'bg-amber-500 hover:bg-amber-600 shadow-amber-500/20' : 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/20'}`}>
                  {quantities.valve !== 100 ? 'Submit with Exceptions' : 'Submit & Close Dispatch'}
                </button>
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
