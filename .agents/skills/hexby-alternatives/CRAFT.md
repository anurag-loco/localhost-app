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
