# Landing Page Style Template

Use these snippets to match the current site’s look and feel (Satoshi font, tight spacing, bold accents, animated modal).

## Layout & Spacing
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Section padding: `py-12 sm:py-16 lg:py-24`
- Grid gap: `gap-6 sm:gap-8 lg:gap-12`

## Typography
- Base font: Satoshi (global). Body: `text-gray-400 leading-relaxed`
- H1: `text-3xl sm:text-5xl font-extrabold tracking-tight text-white`
- H2: `text-2xl sm:text-3xl font-bold text-white`
- H3: `text-xl sm:text-2xl font-semibold text-white`
- Small note: `text-sm text-muted-foreground`

## Buttons
- Primary (dark): `bg-primary text-primary-foreground hover:bg-primary/90`
- Accent CTA (bundle style): `bg-[#F25C05] hover:bg-[#FF6B1A] text-white font-semibold rounded-full`
- Sizes: `h-10 px-4` (sm `h-9 px-3`, lg `h-11 px-8`)
- Link style: `text-primary underline-offset-4 hover:underline`

## Pop-up (Dialog)
- Overlay: `fixed inset-0 bg-black/80`
- Content: `fixed left-1/2 top-1/2 max-w-lg w-full -translate-x-1/2 -translate-y-1/2 bg-background p-6 sm:rounded-lg shadow-lg`
- Animations: uses data-state classes (fade/zoom) already wired in `components/ui/dialog.tsx`.

## Hero Section
```tsx
<section className="bg-black text-white py-16 sm:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 items-center gap-8">
    <div>
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Master Old School Boxing</h1>
      <p className="mt-4 text-gray-400 text-lg">Anytime, anywhere. Clear curriculum, proven drills, faster results.</p>
      <div className="mt-8 flex gap-4">
        <button className="h-11 px-8 bg-[#F25C05] hover:bg-[#FF6B1A] rounded-full font-semibold">Start Now</button>
        <button className="h-11 px-8 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md">View Curriculum</button>
      </div>
    </div>
    <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">{/* media or proof */}</div>
  </div>
  
</section>
```

## Feature Row
```tsx
<section className="py-12 sm:py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
    {["Structure","Sparring IQ","Footwork"].map((t) => (
      <div key={t} className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
        <h3 className="text-xl font-semibold text-white">{t}</h3>
        <p className="mt-2 text-gray-400">Concise, practical, and immediately usable in the gym.</p>
      </div>
    ))}
  </div>
</section>
```

## Pricing/CTA Block
```tsx
<section className="py-12 sm:py-16 border-t border-zinc-800">
  <div className="max-w-3xl mx-auto px-4 sm:px-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-400 line-through">Regular: $594</p>
        <p className="text-3xl font-bold text-[#F25C05]">$397</p>
      </div>
      <button className="h-11 px-8 bg-[#F25C05] hover:bg-[#FF6B1A] rounded-full font-semibold">Buy Now</button>
    </div>
  </div>
</section>
```

## Modal Trigger Example
```tsx
{/* See components/ui/dialog.tsx for primitives */}
<Dialog>
  <DialogTrigger asChild>
    <button className="h-11 px-8 bg-primary text-primary-foreground rounded-md">Open Details</button>
  </DialogTrigger>
  <DialogContent className="max-w-2xl bg-zinc-900 text-white border-zinc-800">
    <DialogHeader>
      <h3 className="text-xl font-bold">What’s Included</h3>
      <p className="text-sm text-gray-400">Short punchy description goes here.</p>
    </DialogHeader>
    {/* content */}
  </DialogContent>
</Dialog>
```
