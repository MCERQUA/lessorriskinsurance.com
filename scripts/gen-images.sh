#!/usr/bin/env bash
# Generate all images for lessorriskinsurance.com via HuggingFace FLUX.1-schnell
# Robust: retries up to 4 times, verifies each is a valid image >= 30KB
set -uo pipefail

OUT="/workspace/Websites/lessorriskinsurance.com/public/images"
mkdir -p "$OUT"

gen() {
  local fname="$1"; shift
  local prompt="$1"; shift
  local steps="${1:-4}"
  local dest="$OUT/$fname"
  local attempt=0
  while [ $attempt -lt 4 ]; do
    attempt=$((attempt+1))
    echo "[$fname] attempt $attempt (steps=$steps)..."
    curl -s --max-time 180 \
      https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-schnell \
      -H "Authorization: Bearer $HF_TOKEN" \
      -H "Content-Type: application/json" \
      -d "$(jq -nc --arg p "$prompt" --argjson s "$steps" '{inputs:$p, parameters:{num_inference_steps:$s}}')" \
      -o "$dest"
    local ftype
    ftype=$(file -b "$dest" 2>/dev/null)
    local sz
    sz=$(stat -c%s "$dest" 2>/dev/null || echo 0)
    if echo "$ftype" | grep -qiE "image|jpeg|png" && [ "$sz" -ge 30000 ]; then
      echo "[$fname] OK ($sz bytes, $ftype)"
      return 0
    fi
    echo "[$fname] FAIL (size=$sz, type=$ftype)"
    if echo "$ftype" | grep -qi "text\|json"; then
      head -c 200 "$dest"; echo ""
    fi
    sleep 4
  done
  echo "[$fname] GAVE UP after $attempt attempts"
  return 1
}

# === 14 images — commercial property / lessor's risk operations ===

gen "hero.jpg" \
  "Photorealistic cinematic wide shot of a modern multi-tenant commercial building exterior, a clean three-story office and warehouse complex with large glass entrance, brick and metal facade, leased commercial space with a few parked delivery vans. Bright clear morning light, professional architectural real-estate photography, deep navy and warm stone tones with subtle gold accents, no text, no watermark" 4

gen "commercial-building.jpg" \
  "Photorealistic photo of a modern commercial multi-tenant building exterior, mix of warehouse and flex space with loading dock and glass storefront entrances, leased to small businesses. Bright daylight, clean landscaping, professional commercial real-estate photography, neutral tones with deep navy accents, no text" 4

gen "building-exterior.jpg" \
  "Photorealistic architectural photo of the exterior of a premium commercial office building, classical columns at the entrance, stone and glass facade, symmetric design, blue sky, professional real-estate photography, refined navy and warm stone palette, no text" 4

gen "commercial-lobby.jpg" \
  "Photorealistic photo of a clean modern commercial building lobby interior, polished floors, reception desk, glass and metal details, warm professional lighting, common area of a leased office building. High-end commercial interior photography, neutral tones with navy accents, no text" 4

gen "property-manager.jpg" \
  "Photorealistic professional portrait of a confident commercial property manager wearing a tailored blazer, arms crossed, standing in the bright lobby of a leased office building. Warm friendly genuine trustworthy expression, soft professional light, corporate photography, no text" 4

gen "rooftop-hvac.jpg" \
  "Photorealistic photo of large commercial rooftop HVAC units and ductwork on the flat roof of an office or warehouse building, blue sky, mechanical equipment, slight elevation. Professional commercial building systems photography, industrial daylight, no text" 4

gen "skyline.jpg" \
  "Photorealistic cinematic wide shot of a modern commercial real-estate skyline, mid-rise office and warehouse buildings under a clear sky, golden hour light. Professional urban architectural photography, deep navy shadows and warm gold highlights, no text, no watermark" 4

gen "maintenance-vehicle.jpg" \
  "Photorealistic photo of a white commercial maintenance truck or van parked outside a multi-tenant commercial building, branded work vehicle, property management tools, bright daylight. Professional commercial photography, clean realistic, no text" 4

gen "maintenance-staff.jpg" \
  "Photorealistic photo of two commercial building maintenance workers in uniforms inspecting a building mechanical room or HVAC system, one with a clipboard, professional and safety-conscious. Bright industrial interior light, professional commercial photography, no text" 4

gen "warehouse-property.jpg" \
  "Photorealistic photo of a multi-tenant commercial warehouse property exterior, several roll-up loading dock doors, leased to small businesses and contractors, parked box trucks, clear daylight. Professional commercial real-estate photography, neutral industrial tones, no text" 4

gen "tenant-gl.jpg" \
  "Photorealistic photo of a commercial landlord and tenant shaking hands in a leased office or warehouse space, reviewing a lease document on a tablet, professional business setting. Warm professional light, commercial real-estate photography, no text" 4

gen "tenant-fire.jpg" \
  "Photorealistic dramatic photo of a commercial fire-damaged warehouse interior after a fire, charred beams, soot on walls, water on the floor, investigation scene, no active flames. Somber documentary photography, dark dramatic lighting, no text" 4

gen "lh1-class-code.jpg" \
  "Photorealistic close-up of commercial real-estate lease documents, building keys, and a tablet showing a property insurance policy on a desk in a bright modern office, shallow depth of field. Professional commercial photography, navy and gold tones, no text" 4

gen "og-image.jpg" \
  "Photorealistic cinematic wide banner image of a modern multi-tenant commercial building exterior at golden hour, professional commercial real-estate photography, wide composition, deep navy and warm gold tones, no text, no watermark" 4

echo "=== ALL IMAGE GENERATION ATTEMPTS COMPLETE ==="
ls -la "$OUT"
