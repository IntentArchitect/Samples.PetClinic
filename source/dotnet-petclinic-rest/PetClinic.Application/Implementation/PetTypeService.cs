using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Intent.RoslynWeaver.Attributes;
using PetClinic.Application.Dtos;
using PetClinic.Application.Interfaces;
using PetClinic.Domain.Common.Interfaces;
using PetClinic.Domain.Entities;
using PetClinic.Domain.Repositories;

[assembly: DefaultIntentManaged(Mode.Merge)]
[assembly: IntentTemplate("Intent.Application.ServiceImplementations.ServiceImplementation", Version = "1.0")]

namespace PetClinic.Application.Implementation
{
    public class PetTypeService : IPetTypeService
    {
        private readonly IPetTypeRepository _petTypeRepository;
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        [IntentManaged(Mode.Fully, Body = Mode.Ignore, Signature = Mode.Ignore)]
        public PetTypeService(IPetTypeRepository petTypeRepository, IMapper mapper, IUnitOfWork unitOfWork)
        {
            _petTypeRepository = petTypeRepository;
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        [IntentManaged(Mode.Merge, Body = Mode.Ignore, Signature = Mode.Fully)]
        public async Task<List<PetTypeDTO>> GetAllPetTypes()
        {
            var elements = await _petTypeRepository.FindAllAsync();
            return elements.MapToPetTypeDTOList(_mapper);
        }

        [IntentManaged(Mode.Merge, Body = Mode.Ignore, Signature = Mode.Fully)]
        public async Task<PetTypeDTO> GetPetType(int petTypeId)
        {
            var element = await _petTypeRepository.FindByIdAsync(petTypeId);
            return element.MapToPetTypeDTO(_mapper);
        }

        [IntentManaged(Mode.Merge, Body = Mode.Ignore, Signature = Mode.Fully)]
        public async Task<int> AddPetType(PetTypeDTO dto)
        {
            var newPetType = new PetType
            {
                Name = dto.Name,
            };

            _petTypeRepository.Add(newPetType);
            await _unitOfWork.SaveChangesAsync();
            return newPetType.Id;
        }

        [IntentManaged(Mode.Merge, Body = Mode.Ignore, Signature = Mode.Fully)]
        public async Task UpdatePetType(int petTypeId, PetTypeDTO dto)
        {
            var existingPetType = await _petTypeRepository.FindByIdAsync(petTypeId);
            existingPetType.Name = dto.Name;
        }

        [IntentManaged(Mode.Merge, Body = Mode.Ignore, Signature = Mode.Fully)]
        public async Task DeletePetType(int petTypeId)
        {
            var existingPetType = await _petTypeRepository.FindByIdAsync(petTypeId);
            _petTypeRepository.Remove(existingPetType);
        }

        public void Dispose()
        {
        }
    }
}