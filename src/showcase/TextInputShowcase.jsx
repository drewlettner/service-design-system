// ============================================================
// TextInputShowcase.jsx
// All TextInput variants — sizes, states, modes, icons
// ============================================================

import TextInput from '../components/TextInput';

const SectionLabel = ({ text, color = '#0041b3' }) => (
  <p style={{
    fontFamily:    "'Helvetica Neue LT Pro', Helvetica, sans-serif",
    fontSize:      '10px',
    fontWeight:    700,
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    color,
    marginBottom:  '16px',
    paddingBottom: '8px',
    borderBottom:  `1px solid ${color}22`,
  }}>
    {text}
  </p>
);

const Stack = ({ children }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '400px', marginBottom: '48px' }}>
    {children}
  </div>
);

const Note = ({ children }) => (
  <p style={{ fontFamily: "'Helvetica Neue LT Pro'", fontSize: '10px', color: '#7588a1', marginBottom: '6px' }}>
    {children}
  </p>
);

export default function TextInputShowcase() {
  return (
    <div style={{ maxWidth: '800px' }}>

      {/* Page header */}
      <div style={{ marginBottom: '48px', paddingBottom: '24px', borderBottom: '2px solid #0041b3' }}>
        <p style={{ fontFamily: "'Helvetica Neue LT Pro'", fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#0041b3', marginBottom: '8px' }}>
          Milwaukee Tool Design System
        </p>
        <h1 style={{ fontFamily: "'Helvetica Neue LT Pro'", fontSize: '30px', lineHeight: '36px', fontWeight: 900, color: '#384453', marginBottom: '4px' }}>
          Text Input
        </h1>
        <p style={{ fontFamily: "'Helvetica Neue LT Pro'", fontSize: '14px', lineHeight: '18px', color: '#7588a1' }}>
          Hybrid filled · 3 sizes · 2 modes · 5 states · Icon support
        </p>
      </div>

      {/* ── Sizes ─────────────────────────────────── */}
      <SectionLabel text="Sizes" />
      <Stack>
        <Note>Large — 64px · 18px · Brand/eService</Note>
        <TextInput label="Serial number" size="large" mode="brand" />
        <TextInput label="Serial number" size="large" mode="brand" defaultValue="J53DL222801001" />

        <Note>Default — 56px · 16px · OnePoint baseline</Note>
        <TextInput label="Serial number" size="default" />
        <TextInput label="Serial number" size="default" defaultValue="J53DL222801001" />

        <Note>Compact — 44px · 14px · Dense contexts</Note>
        <TextInput label="Serial number" size="compact" />
        <TextInput label="Serial number" size="compact" defaultValue="J53DL222801001" />
      </Stack>

      {/* ── States — Task ─────────────────────────── */}
      <SectionLabel text="States — Task mode (blue)" />
      <Stack>
        <TextInput label="Default — empty" />
        <TextInput label="Filled" defaultValue="J53DL222801001" />
        <TextInput label="Error" state="error" defaultValue="J53DL" supportingText="Serial number format is invalid" />
        <TextInput label="Disabled" state="disabled" defaultValue="Cannot edit this field" />
        <TextInput label="Read only" state="readOnly" defaultValue="J53DL222801001" />
      </Stack>

      {/* ── States — Brand ────────────────────────── */}
      <SectionLabel text="States — Brand mode (red)" color="#cc0000" />
      <div style={{ background: '#f1f3f6', padding: '24px', borderRadius: '8px', marginBottom: '48px', maxWidth: '448px' }}>
        <Stack>
          <TextInput label="Default — empty" mode="brand" />
          <TextInput label="Filled" mode="brand" defaultValue="J53DL222801001" />
          <TextInput label="Error" mode="brand" state="error" defaultValue="J53DL" supportingText="Serial number format is invalid" />
          <TextInput label="Disabled" mode="brand" state="disabled" defaultValue="Cannot edit this field" />
          <TextInput label="Read only" mode="brand" state="readOnly" defaultValue="J53DL222801001" />
        </Stack>
      </div>

      {/* ── Icons ─────────────────────────────────── */}
      <SectionLabel text="With icons" />
      <Stack>
        <Note>Leading icon</Note>
        <TextInput label="Search" leadingIcon="search" />
        <TextInput label="Serial number" leadingIcon="circle-check" defaultValue="J53DL222801001" />

        <Note>Trailing icon</Note>
        <TextInput label="Attachment" trailingIcon="paperclip" />
        <TextInput label="Settings" trailingIcon="gear" />

        <Note>Both icons</Note>
        <TextInput label="Search tools" leadingIcon="search" trailingIcon="xmark" />

        <Note>Error with trailing icon</Note>
        <TextInput
          label="Serial number"
          state="error"
          trailingIcon="circle-exclamation"
          supportingText="This field is required"
        />
      </Stack>

      {/* ── Required ──────────────────────────────── */}
      <SectionLabel text="Required fields" />
      <Stack>
        <TextInput label="Serial number" required />
        <TextInput label="Serial number" required defaultValue="J53DL222801001" />
        <TextInput label="Serial number" required state="error" supportingText="This field is required" />
      </Stack>

      {/* ── Compact all states ─────────────────────── */}
      <SectionLabel text="Compact — all states" />
      <Stack>
        <TextInput label="Default" size="compact" />
        <TextInput label="Filled" size="compact" defaultValue="J53DL222801001" />
        <TextInput label="With icon" size="compact" leadingIcon="search" />
        <TextInput label="Error" size="compact" state="error" trailingIcon="circle-exclamation" supportingText="Required" />
        <TextInput label="Disabled" size="compact" state="disabled" defaultValue="Cannot edit" />
        <TextInput label="Read only" size="compact" state="readOnly" defaultValue="J53DL222801001" />
      </Stack>

    </div>
  );
}
