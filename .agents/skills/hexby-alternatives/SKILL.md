---
name: hexby-alternatives
description: Generate three polished redesign concepts for a selected Hexby component.
---

# Hexby alternatives

Create three credible redesigns, not three style variants. Read `CRAFT.md` before generating concepts.

Write only through `write_hexby_alternative`. Do not edit the original component or its imported child files. Export the same name, accept the same public props, and preserve real content, data, actions, behavior, important states, and accessibility.

Treat the original composition components listed by `get_hexby_alternatives_state` as evidence of the current implementation, not mandatory wrappers. Reuse an import when it fits the direction. You may change props and grouping, replace a structural primitive, or define an alternative-local subcomponent when that creates a stronger redesign. Preserve the behavior and accessibility contract rather than the original JSX tree. Optional project components are reusable primitives elsewhere in the project. Discover them with `search_hexby_project_components` after a direction is chosen and use them only when they materially support that direction.

The core rule is: preserve product truth, explore composition and art direction.

Design intent first. Implementation second. Do not write JSX while you are still deciding what the concept is.

Concepts may change layout, grouping, hierarchy, density, interaction, action placement, imagery, visualization, surfaces, borders, elevation, radius, and typography hierarchy. These changes must support the concept rather than exist only to make the option look different.
Preserve recognizable controls from the source. If the original uses rounded,
elevated buttons, a replacement must retain that affordance language or have a
clear interaction reason to change it. At least two concepts should remain
visibly compatible with the source's radius and elevation character.

Include one continuity concept. It should preserve the original component's
major hierarchy, dominant axis, priority-group order, and primary action
placement while refining spacing, type, surfaces, and interaction polish. The
other two concepts may recompose the information architecture, but all three
must still feel like the same product. Do not make every option a radical
rebuild or a flat card treatment.

## Workflow

Complete Analyze through Discover before any `write_hexby_alternative` call. Keep those outputs as private structured notes. Do not put planning transcripts in titles, descriptions, or source.

### 1. Analyze

Call `get_hexby_alternatives_state`, read the selected source and original composition components, then call `view_component_screenshot`.

Before coding, privately identify the user job, primary action, essential information, supporting information, current friction, important states, constraints, and Visual DNA.

Visual DNA means the source font family, typography character, palette and semantic color roles, radius character, border and elevation language, spacing density, imagery, controls, and overall visual character. Treat it as a strong fidelity floor, not a layout lock.

Theme continuity is mandatory unless the source explicitly follows the document
theme. If the sampled component is light, keep all three concept surfaces light;
if it is dark, keep them dark. Do not make one option a dark-mode redesign just
to create variety. The live review flags a root surface that changes the
source's theme.

No JSX in this stage.

### 2. Explore

Generate about 5 to 6 candidate directions internally. Do not map candidates 1, 2, and 3 straight onto the three slots.

Each candidate needs a title, user outcome, composition idea, presentation or interaction idea, visual archetype, departure level (familiar, moderate, or exploratory), and rationale.

Possible directions include graph-led, radial progress, metric grid, timeline, marketplace, editorial, immersive, dashboard, action-first, comparison, progressive disclosure, and focused inspector.

Derive directions from the actual source. Do not force ideas unsupported by the real data. Do not invent a concept because a project component exists.

If the source contains a data series, chart, table, trend, distribution, or
other measurable signal, treat the visualization as product behavior, not
decoration. At least two selected concepts must make the data easier to
understand, and at least one must use a real charting primitive when the host
project provides one. A legend beside an empty well, a list of numbers, or a
decorative line is not a functioning graph. Preserve the source data and use
the smallest credible chart model for it.

If the source is a collection, library, feed, catalog, or document hub, treat
finding and acting on an item as the product behavior. Identify the priority
groups, item metadata, and item-level actions before exploring directions. A
concept may change a browse model into search-first discovery, a focused
detail-and-queue view, or a compact trail, but it must retain a clear path to
the content and its existing actions. Do not turn actionable items into static
text or replace a parallel priority group with empty space.

No JSX in this stage.

### 3. Select 3

Select exactly three candidates. Optimize for usefulness, data support, feasibility, visual potential, conceptual distance, interaction distance, and composition distance.

Cover three different transformation jobs across the set: one makes the primary task or decision easier, one changes how essential information is scanned or understood, and one introduces a different but familiar presentation or interaction model. These are private coverage roles, not reusable concept names. Titles must still come from the selected component and the actual idea.

The three selected concepts must represent meaningfully different product and visual directions. Do not produce conservative, medium, and bold versions of the same layout.

Make the user benefit explicit. Each selected concept needs a concrete outcome
sentence in its private notes and in its `description`: `For [real user task],
this changes [interaction or information model] so [specific benefit]`. A
description that only says cleaner, modern, simpler, or more premium is not a
benefit. The title should name the changed experience or decision, not a generic
series label. Do not reuse recurring titles such as Rethink, Signature, Focus,
Flow, or Direction.

For navigation and header surfaces, do not spend all three slots on reorderings
or recolors. Derive distinct task-oriented models from the source, such as a
route switcher, a search or command-first header, a context or status-first
header, or progressive disclosure through a menu. Use only models supported by
the source's real actions and children. At least two concepts must change the
primary navigation or action model, not just spacing, typography, or color.

Reject a set when two selected concepts share the same primary composition and the same primary interaction, or when their visual silhouettes would be nearly identical.

Write one sentence for each selected concept naming its dominant axis, dominant region, action location, and repeated unit. Reject the set if two sentences are effectively the same. If the original is a stacked list, at least two selected concepts must change that repeated-unit model rather than merely restyle the rows.

For collection surfaces, also name the discovery model for each direction and
the action a person can take from an item. Reject directions that differ only
in the order of the same rows, make the important items less visible, or add
summary counters without making them useful for a decision or navigation.

No JSX in this stage.

### 4. Art direct

For each selected concept, privately define product idea, composition, visual attitude, color strategy, surface treatment, border strategy, elevation strategy, radius character, typography hierarchy, imagery treatment, and desired capabilities.

Every major styling choice should be explainable by this brief. Implementation follows these decisions rather than inventing them during JSX generation.

Do not use arbitrary borders, shadows, radii, colors, or effects merely to create variation. A flat treatment is not a neutral default when the source uses rounded surfaces and shadows.

For the continuity concept, carry the sampled radius, button silhouette, and
elevation language forward explicitly. If a concept changes those anchors, the
art-direction notes must name the usability benefit and preserve equivalent
focus, hover, active, and disabled affordances.

No JSX in this stage.

### 5. Plan copy

Preserve factual meaning and action semantics. Labels may be shortened, regrouped, or reframed when that improves the design.

Do not invent metrics, features, claims, recommendations, navigation, availability, or states.

Keep time language honest. Do not label a lifetime aggregate as recent, weekly,
or trending without time-bounded source data. When deriving a reordered view
from imported data, copy the collection before sorting so the concept does not
mutate shared product data.

No JSX in this stage.

### 6. Discover optional components

Use each selected direction's desired capabilities to call `search_hexby_project_components`. Search for capabilities such as chart, progress, carousel, or gallery. Do not search the project first and then invent a concept around whatever appears.

Use a discovered component only when it materially supports the selected direction. If nothing useful exists, implement with the current stack.

For a chart-led direction, inspect the source's chart imports and data shape
before writing. Prefer the host chart package shown in `HOST UI PACKAGES`, such
as Recharts, over a new dependency. Give the chart wrapper an explicit native
height and `min-width: 0` so responsive charts receive real dimensions. Hexby
preview slots can first mount while hidden. A Recharts `ResponsiveContainer`
must therefore include a credible nonzero `initialDimension`, or the concept
must pass measured explicit dimensions to the chart. A responsive native SVG
with a `viewBox` is also valid and is often the most capture-safe option. Render
actual marks from the source data, include readable axes or a clear direct
label, and keep a tooltip, series toggle, range control, or another meaningful
interaction when the original supports it. Map each series to a restrained
Visual DNA color with a subtle grid. Do not use a rainbow palette or one accent
for every mark. After mounting, verify that the full-resolution snapshot
contains plotted marks, not only a legend. If the chart library mounts with
zero width or height, do not accept the concept. Repair its sizing strategy and
rerun the state review.

An optional component may replace an original structural primitive when it materially improves the direction and preserves real content, behavior, important states, and accessibility. For example, an imported accordion may be regrouped, replaced with tabs, or implemented as an alternative-local disclosure pattern when the source task supports that change. Do not edit the host project's child file.

Third-party UI packages are allowed in the alternatives overlay sandbox when a
focused primitive materially improves the selected interaction. Prefer a host
project package or existing primitive first. If the host does not provide the
needed capability, call `install_hexby_alternative_packages` with the exact
package name, then import and configure it in the overlay only. Dropdowns,
command menus, tabs, accordions, carousels, and accessible popovers are valid
when they make the source task faster or clearer. Do not install a package for
decoration or add a whole design system when a small primitive is enough. Apply
the source Visual DNA to the library's theme and verify the installed package
and interaction in the live preview.

No JSX in this stage except reading candidate APIs if a short source inspection is needed for the best match.

### 7. Implement

Only now generate JSX and CSS.

The overlay sandbox TSX is outside the host project's Tailwind content graph.
Do not depend on new Tailwind utilities or arbitrary-value classes for
essential geometry, background, color, spacing, or typography. Exact utility
classes copied from the original may already exist, but newly generated classes
can silently render unstyled. Use inline style objects or a module-local
`<style>` element with a unique `hexby-alt-` prefix for the concept's own visual
system. Reused host components may keep their existing classes.

Before each write, make a compact native-size layout budget from `Original size`: outer content-safe inset, primary regions, section gaps, text scale, and action height. Use the size-aware rules in `CRAFT.md`. Do not improvise padding independently on every nested wrapper.

Write one concept first and inspect it as a calibration run. Use the strongest or most representative selected direction.

Every write requires `slotId`, `title`, `description`, and `source`. Also pass a concise `plan`: direction title and archetype, capabilities searched, and optional components used. Do not include reasoning transcripts.

The title should describe the concept rather than its styling. Prefer names such as `Weekly trajectory`, `Image first`, or `Decision first`, not `Modern cards` or `Clean UI`.

Always paint the slot root with an opaque background color from Visual DNA or a derived tint. Inner regions may stay lighter.
Pair every text color with the background it actually sits on. Do not rely on the host canvas for contrast, and never place dark text on a dark Visual DNA surface or light text on a light one. The automated review checks effective text contrast through nested backgrounds.
If the source is light and does not follow document theming, the opaque root
must be a light Visual DNA surface. If the source is dark, use the dark surface.
Use contrast or inversion controls only for a local, explicitly labeled preview,
never as an unexplained alternate theme.

Use the original dimensions as the design viewport. Set the outer surface to `box-sizing: border-box`, occupy its assigned width, and prefer `min-height` over a fixed clipping height. Full-bleed visuals may reach the edge, but text and controls must keep the size-aware content-safe inset from `CRAFT.md`.

If the calibration result exposes a planning problem, revise the private art direction before writing the remaining two. Do not redesign the entire concept for a small CSS issue.

Then write the remaining concepts. Preserve their distinct directions. Do not copy the calibration concept's surface language, layout skeleton, hero composition, CTA position, or card structure unless that choice independently belongs to the other concept. Shared brand anchors are fine. Shared composition by accident is not.

The three concepts must not reuse the same silhouette, hero composition, or primary interaction model.

For collection surfaces, give every visible priority item a clear navigable
affordance or an existing item-level action such as open, download, save, or
filter. Preserve enough representative content from each priority group to
support comparison. A compact summary is useful only when it supports the next
action, such as opening a filtered view or choosing what to browse next.

### 8. Review

After all three are ready, call `get_hexby_alternatives_state` with `includeSource=true` and `waitForReadySeconds=30`. That result attaches high-density PNG snapshots of the original and each mounted option at intrinsic size. Look at every attached image at full resolution. They are not limited to the original component.
Read the `SNAPSHOT CAPTURE REPORT (agent-readable)` lines in that result and mention the `css`, `png`, `attached`, density, and byte counts in the thought process. `css` is the requested frame, `png` is the capture before delivery limits, and `attached` is the image actually sent to you. Native entries should be near 2x for small alternatives. If an entry says `visible fallback`, inspect the clipped component bounds and rerun the state tool if the image includes too much surrounding UI. If `attached` is smaller than `png`, account for the delivery cap before judging visual quality. If dimensions are unknown or density is below 1x, treat the capture as suspect and call the state tool again while All Options is open.

Inspect each option in both All Options and Side by Side. A concept passes only
when its opaque surface, foreground contrast, and loaded content are consistent
between the two views. If a gallery preview is unexpectedly dim, nearly black,
or missing content that appears side by side, treat that as a rendering or
capture failure and repair it before judging the design.

Do not use `view_component_screenshot` or `inspect_component_dom` to review generated options. Those tools only show the original component.

Review the three as a set.

Concept critic: fail a concept that does not express its stated direction, still behaves like the original card, is merely the original layout inside boxes, shares another concept's silhouette or primary interaction, has no clear benefit over another alternative, or whose title does not match the visual result. Preserve the concept and repair execution first. Do not replace every weak implementation with an entirely new concept.

Apply a blur test to the set: ignore copy, color, and borders, then compare only dominant blocks, axes, repeated units, and action positions. If two concepts still read as the same bands or grid, rewrite one even when their rationales and titles differ.

Craft critic: apply the edge, rhythm, and native-size tests from `CRAFT.md`. Fail arbitrary spacing, uneven content-safe insets, weak alignment, tiny typography, tight leading, undersized controls, accidental dead space, color, borders, radii, surfaces, elevation, imagery, density, or action hierarchy. For a collection surface, also fail an under-populated composition that hides usable items or leaves an unexplained empty region. Ask whether every major styling decision belongs to one coherent art direction. Do not fail a concept merely because it departs from the original.

If one option is substantially less polished than the strongest, rewrite it. The goal is three strong directions, not one excellent concept plus two fillers.

Rewrite any concept that is mainly a recolor or spacing pass, repeats another concept's silhouette, fails to express its stated direction, weakens important information, actions, states, or accessibility, uses arbitrary colors or surface treatments, changes semantic color meaning, has inconsistent typography or spacing, clips content, relies on tiny text, introduces excessive decoration, or feels noticeably less polished than the strongest concept.

Inspect again after rewrites.

## Repair

For `/hexby-alternatives repair`, load the current state with `includeSource=true`, preserve each concept's title, user outcome, art direction, and primary composition unless the concept itself is invalid, fix failed slots together, render again, and rewrite once more if they remain broken or visually weak.

Repair should normally improve execution rather than replace the direction.

## Non-negotiable usability

Keep the primary action visible, preserve important states and behavior, preserve semantic color meaning, use accessible controls and focus states, do not rely on hover for required actions, prevent clipping and horizontal overflow, and never invent product functionality or data. Structural freedom does not permit dropping behavior or replacing an accessible interaction with inert markup.

## Done when

All three concepts mount, preserve product truth, feel polished, have distinct compositions or interaction models, and express coherent art direction.

A user should prefer a concept because of its experience or design direction, not merely its color or radius.

Do not use em dashes in user-facing text.

# Hexby alternatives craft

Each concept should feel like a strong product designer understood the task, chose a clear direction, and executed it intentionally.

The goal is three credible product directions, not three decorated versions of the same component.

## Product first

Understand what the user is trying to accomplish, what they need to notice or decide first, what information is essential, what creates friction, and what behavior must remain familiar.

Every concept must solve a real product or presentation problem. Cleaner, modern, softer, or premium alone is not a concept.

## Preserve product truth

Keep real content, data, actions, behavior, important states, semantic meaning, factual values, and accessibility behavior.

Do not invent features, metrics, recommendations, brands, navigation, claims, or fake states.

Preserve the product contract, not the original JSX tree. Imported structural
components are evidence of the current implementation. Reuse them when they fit
the direction, or replace and restructure them inside the alternative when a
different composition is better. An accordion may become tabs, a focused
disclosure, or another accessible interaction when the real content and states
still work. Never edit the host project's child component files.

The original is product evidence, not a layout template.

## Visual DNA

Understand the source font family, typography character, palette, semantic color roles, radius language, border and elevation language, spacing density, imagery, controls, and overall visual character.

Use these as strong fidelity anchors rather than hard layout locks.

### Theme continuity and familiar controls

The sampled component's theme is part of its product character. When the source
does not follow the document theme, every concept keeps that sampled theme. A
light component stays light across all three slots, and a dark component stays
dark. Do not use a dark option as a novelty direction. The live review flags a
root surface that drifts from the source theme.

Preserve recognizable controls. If the source uses rounded buttons, soft borders,
or shadows, keep that affordance language in at least two concepts. A structural
redesign may move or regroup a button, but replacing it with a flat square
control needs a clear usability reason and the same hover, focus, and disabled
states.

A concept may reinterpret borders, radius, elevation, surfaces, typography hierarchy, spacing, density, and imagery when the art direction requires it.

Include one continuity direction that keeps the original major hierarchy,
dominant axis, priority-group order, and primary action placement while
polishing spacing, type, surfaces, and interaction details. The other two can
recompose the information architecture, but the set should still read as one
product family. Do not make all three options radical or flat.

The test is intentionality.

Removing borders for an editorial concept, increasing image prominence for a marketplace concept, or using stronger type hierarchy for a content-led concept can be appropriate.

Random radius values, arbitrary thick borders, unrelated accent colors, excessive shadows, status colors used decoratively, and every section becoming a rounded card are not. Flatness is a design decision, not the default.

For the continuity direction, explicitly carry forward the source radius,
button silhouette, and elevation language. If another direction changes those
anchors, explain the usability benefit and retain equivalent focus, hover,
active, and disabled affordances.

## Color

Color should have a job.

Preserve the meaning of primary, text, surface, border, success, warning, error, informational, focus, and selection colors.

You may emphasize existing colors differently or derive subtle tints when useful. Do not introduce unrelated accents or use semantic colors decoratively.

Color variation should support the concept rather than become the concept.

## Hierarchy before chrome

Build hierarchy through composition, typography, grouping, spacing, imagery, and color before adding borders, backgrounds, or elevation.

Avoid card inside card inside card.

Do not automatically give every region a surface, border, radius, and shadow.

Use the lightest visual treatment that communicates structure clearly.

## Art direction

Every concept needs a product idea, a composition idea, and a visual attitude.

Useful archetypes include data-led, dashboard, marketplace, editorial, immersive, utility, premium, playful, action-first, and content-first.

Fitness interfaces may naturally explore graphs, radial progress, metric grids, timelines, or coaching-style summaries.

Listing interfaces may naturally explore marketplace layouts, editorial image treatments, compact comparison rows, immersive media, or minimal action-first layouts.

Use familiar product patterns as inspiration, not as literal clones.

## Structural variety

Vary information architecture, grouping, hierarchy, action placement, interaction, imagery, visualization, and density.

Across three concepts, cover three different transformation jobs: task or decision, information comprehension, and presentation or interaction. Treat these as private coverage roles, never as fixed labels or titles.

The three concepts should have high conceptual distance from one another. Avoid safe, medium, and bold versions of the same idea.

If two concepts still have the same silhouette after mentally removing their labels and colors, rewrite one.

## User benefit contract

Name the real task before choosing a layout. Every concept description should
make the chain explicit: `For [task], this changes [interaction or information
model] so [benefit]`. The benefit must be observable in the rendered result,
such as fewer steps to switch context, faster scanning of status, or clearer
access to a secondary action. Cleaner, modern, premium, and simpler are visual
attitudes, not user outcomes. Do not reuse generic concept names or recurring
labels from an earlier generation.

For headers and navigation, three reorderings are not three directions. Explore
different task models when the source supports them: route switching, search or
command-first access, context or status-first grouping, or progressive
disclosure through a menu. At least two concepts should change the primary
navigation or action model. A recolor, spacing pass, or control swap without a
different user task does not qualify.

Compare dominant axis, dominant region, action location, and repeated unit. Different titles do not make two stacked feeds structurally different. When the original is a list, at least two concepts should replace the row stack with another credible model such as a focused stage, comparison, timeline, grouped summary, spatial collection, or progressive disclosure, but only when the source data supports it.

## Reusable components

Optional project components are reusable primitives available elsewhere in the project. Charts, progress indicators, tabs, segmented controls, badges, carousels, timelines, and accordions are useful only when they materially support the selected direction.

Choose the design direction first and components second. After a direction is chosen, search by capability. Do not invent a concept because a component exists.

An optional component may replace an original structural primitive when the
new composition preserves behavior and accessibility. Avoid swapping primitives
only to make a concept look different.

Third-party packages are permitted in the overlay sandbox when an accessible,
focused primitive materially improves the chosen interaction. Prefer packages
already used by the host project. If none fits, install the smallest exact
package with `install_hexby_alternative_packages`; never install into the host
project. Configure library theme tokens from Visual DNA and verify the mounted
interaction. A dropdown, command menu, tabs,
accordion, carousel, or popover is justified by a task improvement, not by
visual novelty alone.

## Visual craft

Use deliberate spacing and clear hierarchy.

Borders, radii, surfaces, and shadows should behave as one coherent system within each concept.

Keep typography readable and intentional.

Every concept must paint an opaque background on its outer surface.
Foreground and background colors are a pair. Verify readable contrast on every text-bearing region, including muted metadata and full-bleed sections, without relying on the preview canvas behind the component.

Deliver essential styling in a form the sandbox can load. Alternative modules
are outside the host Tailwind content graph, so new utility classes and
arbitrary-value utilities may not exist in the compiled CSS. Use inline styles
or a module-local style element with a unique `hexby-alt-` prefix for layout,
dimensions, surfaces, colors, and typography introduced by the concept. A
design that depends on missing utility CSS has not rendered successfully.

Restack narrow layouts instead of squeezing content.

Treat imagery carefully.

Prefer one strong visual idea over combining many tricks.

A graph, chips, gradients, badges, cards, tabs, and image effects in the same concept usually means the direction lacks focus.

## Data visualization contract

When the source exposes a series, trend, distribution, or other measurable
signal, the graph is part of the product's information model. Do not replace it
with a legend, a row of values, prose, or an empty chart well. At least two
directions should use a visualization that makes the source data easier to
compare, and one should use the host charting package when available.

Use real source data and a chart primitive with visible marks. For Recharts or
similar responsive libraries, place the chart in a wrapper with an explicit
native height and `min-width: 0`; a percentage height without a measured parent
can render a blank SVG. Preview slots may first mount while hidden, so a
Recharts `ResponsiveContainer` also needs a credible nonzero
`initialDimension`. Passing measured explicit dimensions or using a responsive
native SVG `viewBox` are reliable alternatives. Keep axes, direct labels, or a
tooltip legible at native size. If the original has a range selector or series choice, preserve that
behavior or make the new interaction equally clear. A snapshot passes only when
the plotted marks are visible and the interaction has an observable state
change. Use a restrained series palette mapped to the source's semantic colors,
one clear accent per series, and a low-contrast grid. Do not use a rainbow of
unrelated colors or make every mark the same accent.

## Collection and library contract

For a collection, library, feed, catalog, or document hub, the experience is
about finding a relevant item and acting on it. Preserve the source's priority
groups, meaningful metadata, and item-level actions. A concept can adopt a
search-first, focused-detail, queue, trail, or category-led browse model, but
the new model must make an item easier to locate, compare, open, download, save,
or filter.

Do not convert action-bearing rows into static text. If the source contains
parallel groups such as recent and popular items, retain both or provide an
equally visible control with an observable state change. Keep enough
representative items visible to make the stated model credible. A single row in
a large empty surface is not a focused experience unless its supporting detail
or next action uses the space meaningfully.

Summary counts should earn their space. Use them to orient a user, reveal a
meaningful signal, or lead to a filtered view. Do not turn counters into the
main composition while hiding the resources they summarize. Map color to a
real semantic role such as category, status, file type, selection, or action.
Avoid arbitrary multicolor statistic cards.

Keep time claims faithful to the source. A lifetime popularity count cannot be
called weekly or recent unless the source supplies that time dimension. When
deriving a sorted collection from imported data, copy it before sorting rather
than mutating the shared array.

## Native size and geometry

Design at the `Original size` returned by `get_hexby_alternatives_state`. That is the concept's real viewport, not a thumbnail and not an invitation to build a larger page that only looks good after scaling down.

Use `box-sizing: border-box` on the outer surface. Occupy the assigned width and use the original height as a minimum rather than a clipping height. A concept may grow when its real content needs more room. Do not shrink type, controls, or insets to force content into a fixed height.

Choose the geometry before styling details:

- Identify the content frame, the primary alignment axis, and the dominant region.
- Budget space for the hero, supporting information, and actions at native size.
- Restack a narrow layout instead of squeezing columns.
- Full-bleed media or color is allowed. Text and controls still need a deliberate safe area.
- Fill leftover room through composition, not stretched controls, oversized empty cards, or arbitrary spacer elements.

## Spacing rhythm

Use a small, explicit spacing scale. Prefer a 4px base with most layout steps landing on 8px increments.

- Related label and value: 4 to 8px.
- Icon and label: 8px.
- Content within one group: 8 to 12px.
- Sibling groups: 16 to 20px.
- Major sections: 24 to 32px.
- Primary action separation: at least 12px from adjacent copy.

Choose the outer content inset from the surface's shortest side:

- Under 200px: at least 12px.
- 200 to 359px: at least 16px.
- 360 to 639px: at least 20px.
- 640px or more: at least 24px, usually no more than 40px unless the composition clearly calls for editorial whitespace.

These are content-safe-area floors, not a demand for padding on the root itself. A full-bleed background can reach the edge while its readable content remains inset.

Do not use padding as the last variable adjusted to make a layout fit. If the design is crowded, simplify, restack, shorten labels without changing meaning, or let the surface grow. If it feels empty, strengthen the composition or grouping. Do not merely inflate every gap.

Related items should be visibly closer than unrelated groups. Avoid a mechanical layout where every gap is identical. Align repeated edges and baselines. Check all four outer edges, not only the top and left.

## Typography and controls

Scale typography to the native component, not to the gallery zoom.

- Compact surfaces under 280px tall: title 18 to 24px, body 13 to 15px, metadata 11 to 12px.
- Larger surfaces: a display title may reach 28 to 40px when it is the actual hero.
- Body copy should usually use line-height 1.4 to 1.6 and a readable line length.
- Never use text below 11px. Do not solve crowding with tiny metadata.
- Adjacent title, body, and metadata need distinguishable size, weight, or tone.

Interactive controls should normally be at least 32px tall with a clear hit area. A compact control may be 28px only when its surrounding space preserves usability. Keep one visually dominant action. Style hover, focus-visible, active, and disabled or `aria-disabled` states.

## Interaction

Keep primary controls obvious and accessible.

Required actions should not depend on hover or ambiguous gestures.

Inputs need usable labels and focus states.

Progressive disclosure should reveal detail without losing context.

Motion is optional and should remain brief and purposeful.

A visually strong concept that makes the user's task slower or less obvious fails.

## Review

Ask whether the concept solves a real problem, whether it looks intentionally designed, and whether it is genuinely different from the other two.

Concept critic: fail concepts that do not express their stated direction, clone the original silhouette, share another concept's primary composition and interaction, have no clear benefit over another alternative, or whose title does not match the visual result. Repair execution first. Do not replace the concept unless it is invalid.

Craft critic: fail arbitrary colors, borders, radii, shadows, weak typography hierarchy, inconsistent spacing, careless imagery, clipped content, tiny text, weakened actions or states, changed semantic color meaning, inaccessible replacement interactions, excessive decoration, missing compiled styles, or visibly lower polish than the rest of the set. Do not fail a concept merely because it departs from the original.

Fail concepts that are mostly recolors, spacing changes, or generic card grids.

Use the grayscale test: if two concepts would still look nearly identical without color, one needs a stronger composition.

Use the art-direction test: every visible styling decision should have a reason connected to hierarchy, product meaning, interaction, grouping, emphasis, readability, or the chosen visual attitude.

Use the edge test: inspect the full-resolution snapshot and trace all four sides. Fail accidental edge kissing, uneven content-safe areas, clipped borders, and controls that appear glued to a surface edge.
When reviewing a snapshot, record its capture report in the thought process. Verify that native PNG dimensions match the requested CSS frame multiplied by the reported density, and that delivery resizing did not make text too small to inspect. If the report marks a visible fallback, check that the crop is focused on the component rather than the surrounding gallery.

Use the view-parity test: inspect every option in both All Options and Side by
Side. The same option must keep an opaque surface, readable foreground contrast,
and complete content in both. A dim or almost-black gallery preview, or content
that appears only in Side by Side, is a preview rendering defect. Repair it
before accepting the concept.

Use the rhythm test: cover the colors mentally and inspect only gaps and alignment. Related content should cluster, sections should separate, and repeated rows should share a cadence. Repair one-off gap values that do not communicate hierarchy.

Use the native-size test: text and controls must remain comfortable when viewed at 100%, regardless of how much the All Options gallery scales the concept down.

If one option is substantially less polished than the strongest, rewrite it. The goal is three strong directions, not one excellent concept plus two fillers.

The final three should feel like defensible product directions, not generated variations.
