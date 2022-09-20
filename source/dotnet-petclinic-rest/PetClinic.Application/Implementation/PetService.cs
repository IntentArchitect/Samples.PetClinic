using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Intent.RoslynWeaver.Attributes;
using PetClinic.Application.Dtos;
using PetClinic.Application.Interfaces;
using PetClinic.Domain.Entities;
using PetClinic.Domain.Repositories;

[assembly: DefaultIntentManaged(Mode.Merge)]
[assembly: IntentTemplate("Intent.Application.ServiceImplementations.ServiceImplementation", Version = "1.0")]

namespace PetClinic.Application.Implementation
{
    public class PetService : IPetService
    {
        private readonly IPetRepository _petRepository;
        private readonly IMapper _mapper;

        [IntentManaged(Mode.Merge)]
        public PetService(IPetRepository petRepository, IMapper mapper)
        {
            _petRepository = petRepository;
            _mapper = mapper;
        }

        [IntentManaged(Mode.Merge, Body = Mode.Ignore, Signature = Mode.Fully)]
        public async Task<PetDTO> GetPet(int petId)
        {
            var element = await _petRepository.FindByIdAsync(petId);
            return element.MapToPetDTO(_mapper);
        }

        [IntentManaged(Mode.Merge, Body = Mode.Ignore, Signature = Mode.Fully)]
        public async Task AddPet(PetCreateDTO dto)
        {
            var newPet = new Pet
            {
                Name = dto.Name,
                BirthDate = dto.BirthDate,
                OwnerId = dto.OwnerId,
                PetTypeId = dto.PetTypeId
            };

            _petRepository.Add(newPet);
        }

        [IntentManaged(Mode.Merge, Body = Mode.Ignore, Signature = Mode.Fully)]
        public async Task UpdatePet(int petId, PetUpdateDTO dto)
        {
            var existingPet = await _petRepository.FindByIdAsync(petId);
            existingPet.Name = dto.Name;
            existingPet.BirthDate = dto.BirthDate;
        }

        [IntentManaged(Mode.Merge, Body = Mode.Ignore, Signature = Mode.Fully)]
        public async Task DeletePet(int petId)
        {
            var existingPet = await _petRepository.FindByIdAsync(petId);
            _petRepository.Remove(existingPet);
        }

        public void Dispose()
        {
        }
    }
}